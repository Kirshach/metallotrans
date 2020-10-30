// добавление юзеров
document.forms.addUser.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch('/admin/administratorpanel/user', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      emailCustomer: document.getElementById('emailCustomer').value,
      phoneCustomer: document.getElementById('phoneCustomer').value,
      nameCustomer: document.getElementById('nameCustomer').value,
      aboutCustomer: document.getElementById('aboutCustomer').value,
    }),
  });
  const result = await res.text();
  if (res.status === 400) {
    document.getElementById('registerStatusCustomer').innerText = result;
  } else {
    alert('Customer added');
    window.location.href = '/admin/administratorpanel';
  }
});

// добавление товара
document.forms.addProduct.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch('/admin/administratorpanel/product', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: document.getElementById('title').value,
      diameter: document.getElementById('diameter').value,
      quality: document.getElementById('quality').value,
      price: document.getElementById('price').value,
    }),
  });
  const result = await res.text();
  if (res.status === 400) {
    document.getElementById('registerStatusProduct').innerText = result;
  } else {
    alert('Product added');
    window.location.href = '/admin/administratorpanel';
  }
});

document.getElementById('result').addEventListener('click', async (e) => {
  e.preventDefault();
  const resp = await fetch('/admin/administratorpanel/sendPrice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      custemail: e.target.value,
    }),
  })
  if (resp.status === 200) {
    const html = await resp.text();
    console.log(html);

    alert('Message sended')
  } else {
    console.log('miss SEND button');
  }
});
