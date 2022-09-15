const BODY = document.querySelector('body') as HTMLBodyElement;
const greeting = document.createElement('h1');
greeting.innerHTML = 'Hello world';
BODY.append(greeting);
