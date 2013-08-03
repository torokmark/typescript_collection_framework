

var Collections;
(function (Collections) {
    var StackEnumerator = (function () {
        function StackEnumerator(stack) {
            this.stack = stack;
            this.reset();
        }
        StackEnumerator.prototype.reset = function () {
            this.index = 0;
            return this;
        };

        StackEnumerator.prototype.moveNext = function () {
            var result = this.index < this.stack.count;
            this.index++;
            return result;
        };

        Object.defineProperty(StackEnumerator.prototype, "current", {
            get: function () {
                return this.stack.toArray()[this.index];
            },
            enumerable: true,
            configurable: true
        });
        return StackEnumerator;
    })();

    var Stack = (function () {
        function Stack() {
        }
        Stack.prototype.getEnumerator = function () {
            return new StackEnumerator(this);
        };

        Object.defineProperty(Stack.prototype, "count", {
            get: function () {
                return this.array.length;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Stack.prototype, "isReadOnly", {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });

        Stack.prototype.add = function (item) {
            this.array.push(item);
            return this;
        };

        Stack.prototype.clear = function () {
            this.array = [];
            return this;
        };

        Stack.prototype.contains = function (item) {
            for (var key in this.array) {
                if (this.array[key] === item)
                    return true;
            }
            return false;
        };

        Stack.prototype.copyTo = function (array, arrayIndex) {
            for (var i = arrayIndex; i < array.length; ++i) {
                this.add(array[i]);
            }

            return this;
        };

        Stack.prototype.remove = function (item) {
            var index = this.array.indexOf(item);
            if (index !== -1)
                this.array.splice(index, 1);
            return this;
        };

        Stack.prototype.pop = function () {
            return this.array.pop();
        };

        Stack.prototype.peek = function () {
            return this.array[this.array.length - 1];
        };

        Stack.prototype.push = function (item) {
            this.array.push(item);
            return this;
        };

        Stack.prototype.toArray = function () {
            return this.array;
        };

        Stack.prototype.initializeFromCollection = function (collection) {
            var enumerator = collection.getEnumerator();
            enumerator.reset();

            while (enumerator.moveNext()) {
                this.add(enumerator.current);
            }

            return this;
        };

        Stack.prototype.constructor = function (collection) {
            if (collection)
                this.initializeFromCollection(collection);
        };
        return Stack;
    })();
    Collections.Stack = Stack;
})(Collections || (Collections = {}));

