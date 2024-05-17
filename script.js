
const root = document.getElementById('root');

const stop1  = document.getElementsByClassName('lds-roller')[0];

const getData = async (id) => {
   await fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => {
           data.forEach(user => {
               document.getElementById('root').innerHTML += `
               
               <h1 class="aaaa">Name:${user.name}</h1>
               
               <h2>UserName${user.username}</h2>
               
               <h2>e-mail:${user.email}</h2>
               
               <h2>ID:${user.id}</h2>
               <hr>
               `;
   
           });
       })
       
}
const func = async () => {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)

    await stop(); 
};

const stop = async () => {
        stop1.style.display = 'none'; 
};

func();
