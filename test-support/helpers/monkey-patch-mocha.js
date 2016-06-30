/* global Mocha, mocha, chai */

export default function () {
    Mocha.Runnable.prototype.run = function (fn) {
        var self = this;
        var start = new Date();
        var ctx = this.ctx;
        var finished;
        var emitted;

        // Sometimes the ctx exists, but it is not runnable
        if (ctx && ctx.runnable) {
            ctx.runnable(this);
        }

        // called multiple times
        function multiple(err) {
            if (emitted) {
                return;
            }
            emitted = true;
            self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));
        }

        // finished
        function done(err) {
            var ms = self.timeout();
            if (self.timedOut) {
                return;
            }
            if (finished) {
                return multiple(err || self._trace);
            }

            self.clearTimeout();
            self.duration = new Date() - start;
            finished = true;
            if (!err && self.duration > ms && self._enableTimeouts) {
                err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');
            }
            fn(err);
        }

        // for .resetTimeout()
        this.callback = done;

        // explicit async with `done` argument
        if (this.async) {
            this.resetTimeout();

            if (this.allowUncaught) {
                return callFnAsync(this.fn);
            }
            try {
                callFnAsync(this.fn);
            } catch (err) {
                done(Mocha.utils.getError(err));
            }
            return;
        }

        if (this.allowUncaught) {
            callFn(this.fn);
            done();
            return;
        }

        // sync or promise-returning
        try {
            if (this.pending) {
                done();
            } else {
                callFn(this.fn);
            }
        } catch (err) {
            done(Mocha.utils.getError(err));
        }

        function callFn(fn) {
            var result = fn.call(ctx);
            if (result && typeof result.then === 'function') {
                self.resetTimeout();
                result
                    .then(function () {
                            done();
                            // Return null so libraries like bluebird do not warn about
                            // subsequently constructed Promises.
                            return null;
                        },
                        function (reason) {
                            done(reason || new Error('Promise rejected with no or falsy reason'));
                        });
            } else {
                if (self.asyncOnly) {
                    return done(new Error('--async-only option in use without declaring `done()` or returning a promise'));
                }

                done();
            }
        }

        function callFnAsync(fn) {
            fn.call(ctx, function (err) {
                if (err instanceof Error || Object.prototype.toString.call(err) === '[object Error]') {
                    if (mocha.options.allowUncaught && !(err instanceof chai.AssertionError)) {
                        throw(err);
                    }
                    return done(err);
                }
                if (err) {
                    if (Object.prototype.toString.call(err) === '[object Object]') {
                        return done(new Error('done() invoked with non-Error: '
                            + JSON.stringify(err)));
                    }
                    return done(new Error('done() invoked with non-Error: ' + err));
                }
                done();
            });
        }
    };
}
