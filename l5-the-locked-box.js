'use strict';

const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    if (box.locked == true) {
        box.unlock();
        return body();
    }

    try {
        return body();
    } catch (e) {
        console.log("Error raised:", e);
    } finally {
        box.lock();
    }

}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

console.log(box.locked);