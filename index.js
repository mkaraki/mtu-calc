const list = document.getElementById('list');
const res_mtu = document.getElementById('res-mtu');
const res_mss = document.getElementById('res-mss');

const add = (name, size) => {
    let div = document.createElement('div');
    let close = document.createElement('span');
    close.innerHTML = '&times;';
    close.onclick = () => {
        div.remove();
        calc();
    }
    close.className = 'clickable';
    div.innerText = `${name} (${size} bytes)`;
    div.className = 'item';
    div.dataset.size = size;
    div.insertBefore(close, div.firstChild);
    list.appendChild(div);
    calc();
};

const calc = () => {
    let mtu = document.getElementById('n-ether-frame').value;
    Array.prototype.forEach.call(list.getElementsByClassName('item'), (v) => {
        if (v.dataset.size) {
            mtu -= v.dataset.size;
            return;
        }
    });

    res_mtu.innerHTML = mtu;
    res_mss.innerHTML = mtu - 40;
};