const calc = () => {
    let mtu = document.getElementById('n-ether-frame').value;
    Array.prototype.forEach.call(document.getElementsByClassName('mtu'), (v) => {
        if (!v.checked)
            return;

        if (v.dataset.size) {
            mtu -= v.dataset.size;
            return;
        }

        if (v.dataset.sizefor) {
            mtu -= document.getElementById(v.dataset.sizefor).value;
            return;
        }
    });

    let mss = mtu;
    Array.prototype.forEach.call(document.getElementsByClassName('mss'), (v) => {
        if (!v.checked)
            return;

        if (v.dataset.size) {
            mss -= v.dataset.size;
            return;
        }

        if (v.dataset.sizefor) {
            mss -= document.getElementById(v.dataset.sizefor).value;
            return;
        }
    });

    alert(`MTU: ${mtu}\nMSS: ${mss}`);
};