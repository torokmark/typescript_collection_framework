var Collections;
(function (Collections) {
    var Stack = (function () {
        function Stack() {
        }
        Stack.prototype.getEnumerator = function () {
            var getCurrent = function () {
                return this.array.length > currentIndex ? this.array[currentIndex] : undefined;
            }, currentIndex = 0, moveNext = function () {
                currentIndex++;
                var current = getCurrent();
                return this.array.length > currentIndex;
            }, reset = function () {
                currentIndex = 0;
            };

            return {
                current: getCurrent(),
                moveNext: moveNext,
                reset: function () {
                    reset();
                    return this;
                }
            };
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
            if (index === -1)
                return false;
            this.array.splice(index, 1);
            return true;
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
