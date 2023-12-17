// date.now - 14200704e5(1420070400000)
// result shift left 22

function generateNonce() {
    const a = Date.now() - 14200704e5;
    const r = BigInt(a) << 22n
    return r.toString()
}

function reverseNonce(num) {
    const a = num >> 22n
    const r = a + 1420070400000n
    return r.toString()
}