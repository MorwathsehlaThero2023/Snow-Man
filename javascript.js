function newElement(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

function Snowflake() {
  this.HTMLElement = newElement('span', 'snowflake');
  this.HTMLElement.innerHTML = '❄️';
  this.getY = () => parseFloat(this.HTMLElement.style.top.split('%')[0]);
  this.setY = y => this.HTMLElement.style.top = `${y}%`;
  this.setX = () => {
    const randomPosition = Math.random() * 100;
    this.HTMLElement.style.left = `${randomPosition}%`;
  };
  this.setSize = () => {
    const randomSize = Math.random() * 1.5 + 0.5;
    this.HTMLElement.style.fontSize = `${randomSize}rem`;
  };
  
  this.setY(-10);
  this.setX();
  this.setSize();
}

function Snowstorm() {
  this.HTMLElement = newElement('div', 'snowstorm');
  this.snowflakes = [];
  
  this.addSnowflakes = () => {
    if (this.snowflakes.length <= 100) {
      const snowflake = new Snowflake();
      this.snowflakes.push(snowflake);
      this.HTMLElement.appendChild(snowflake.HTMLElement);
    }
  };
  
  this.animation = () => {
    this.snowflakes.forEach(snowflake => {
      const y = snowflake.getY();
      const newY = y >= 100 ? -10 : y + 0.5;
      snowflake.setY(newY);
    });
  };
}

const snowstorm = new Snowstorm();
document.body.appendChild(snowstorm.HTMLElement);

setInterval(() => {
  snowstorm.addSnowflakes();
}, 100);

setInterval(() => {
  snowstorm.animation();
}, 40);
