// Define the simple array
let simpleArray = ['one', 2, 'three', true, false, undefined, null];

// Display simple array
let simpleArrayDiv = document.getElementById('simpleArray');
simpleArrayDiv.innerHTML += '<p><strong>Simple Array:</strong></p>';
simpleArrayDiv.innerHTML += `<p>Length: ${simpleArray.length}</p>`;
simpleArrayDiv.innerHTML += '<p>Elements:</p>';
simpleArray.forEach(element => {
    simpleArrayDiv.innerHTML += `<p>${element}</p>`;
});

// Define the complex array
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

// Display complex array
let complexArrayDiv = document.getElementById('complexArray');
complexArrayDiv.innerHTML += '<p><strong>Complex Array:</strong></p>';
complexArrayDiv.innerHTML += `<p>Length: ${complexArray.length}</p>`;
complexArrayDiv.innerHTML += '<p>Elements:</p>';
complexArray.forEach(subArray => {
    subArray.forEach(obj => {
        complexArrayDiv.innerHTML += `<p>${JSON.stringify(obj)}</p>`;
    });
});
