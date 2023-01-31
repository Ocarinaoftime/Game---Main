var p5Inst = new p5(null, 'sketch');

window.onload = function () {
    document.getElementById('defaultCanvas0').width = '1600'
    document.getElementById('defaultCanvas0').height = '1600'
    document.getElementById('defaultCanvas0').style.width = '500px'
    document.getElementById('defaultCanvas0').style.height = '500px'
}
window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["483e8cb4-ae97-44f1-82c1-b271dc6b6743", "7c8eee7b-484c-4816-8be4-24c92bf63316", "d61580d2-4ae6-455d-893a-abdcd86efc0b", "abc", "jd", "chest", "chest_opened", "HeartFull", "HeartHalf", "HeartEmpty"],"propsByKey":{"483e8cb4-ae97-44f1-82c1-b271dc6b6743":{"sourceSize":{"x":64,"y":64},"frameSize":{"x":64,"y":64},"frameCount":1,"frameDelay":4,"name":"box","sourceUrl":null,"size":610,"version":"KTM4AmeVl.RJLrUxovDOXE6mtbE0mDAz","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Bush.png"}, "7c8eee7b-484c-4816-8be4-24c92bf63316":{"sourceSize":{"x":78,"y":84},"frameSize":{"x":78,"y":84},"frameCount":1,"frameDelay":12,"name":"Player","sourceUrl":null,"size":1204,"version":"7HPZiqjwBJC_Gkj.dzj1eKqT9FqVBRtI","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"./assets/Player.png"}, "d61580d2-4ae6-455d-893a-abdcd86efc0b":{"sourceSize":{"x":100,"y":100},"frameSize":{"x":100,"y":100},"frameCount":1,"frameDelay":4,"name":"Controls_Text","sourceUrl":null,"size":1887,"version":"WFRpTO0596IPQJ6tq5U6Fq3C84lH89b7","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"./assets/Controls_Text.png"}, "abc":{"sourceSize":{"x":204,"y":204},"frameSize":{"x":102,"y":102},"frameCount":4,"frameDelay":4,"name":"Punch","sourceUrl":null,"size":1251,"version":"AG5WrZb7QsgRl9Ec6EzNOrqCgjOfnaRe","looping":false,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Punch.png"}, "jd":{"sourceSize":{"x":1600,"y":1600},"frameSize":{"x":1600,"y":1600},"frameCount":1,"frameDelay":1,"name":"Map","sourceUrl":null,"size":1251,"version":"AG5WrZb7QsgRl9Ec6EzNOrqCgjOfnaRe","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Map.png"}, "chest":{"sourceSize":{"x":64,"y":64},"frameSize":{"x":64,"y":64},"frameCount":1,"frameDelay":4,"name":"Chest","sourceUrl":null,"size":610,"version":"MSLId.E49WgO28_CagFN3Rh6J8rkNRae","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Chest.png"}, "chest_opened":{"sourceSize":{"x":64,"y":64},"frameSize":{"x":64,"y":64},"frameCount":1,"frameDelay":4,"name":"Chest_Opened","sourceUrl":null,"size":610,"version":"MSLId.E49WgO28_CagFN3Rh6J8rkNRae","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Chest_Opened.png"}, "HeartFull":{"sourceSize":{"x":64,"y":60},"frameSize":{"x":64,"y":60},"frameCount":1,"frameDelay":4,"name":"HeartFull","sourceUrl":null,"size":null,"version":"MSLId.E49WgO28_CagFN3Rh6J8rkNRae","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Heart-Full.png"}, "HeartHalf":{"sourceSize":{"x":64,"y":60},"frameSize":{"x":64,"y":60},"frameCount":1,"frameDelay":4,"name":"HeartHalf","sourceUrl":null,"size":null,"version":"MSLId.E49WgO28_CagFN3Rh6J8rkNRae","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Heart-Half.png"}, "HeartEmpty":{"sourceSize":{"x":64,"y":60},"frameSize":{"x":64,"y":60},"frameCount":1,"frameDelay":4,"name":"HeartEmpty","sourceUrl":null,"size":null,"version":"MSLId.E49WgO28_CagFN3Rh6J8rkNRae","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/Heart-Empty.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

World.frameRate = 175

showMobileControls(true, true, false, true)
var died = false
var damage1 = 1;
var damage2 = 1;
var damage3 = 1;
var x = 102;
var y = 102;
var arrowSpeed = 5;

const Player = {
  hrtcontainers: 3,
  maxhearts: 3,
  hearts: 3,
}

var boxTop = createSprite(199, -25, 1600, 10)
var boxLeft = createSprite(-25, 399, 10, 1600)
var boxDown = createSprite(199, 820, 1600, 10)
var boxRight = createSprite(820, 399, 10, 800)
var background = createSprite(399, 399, 801, 801)
var map = createSprite(-1, -1, 1600, 1600)
var grass = createSprite(-200, 600, 64, 64)
var bush = createSprite(199, 150, 32, 32)
var player = createSprite(350, 399, 102, 102)
var chest = createSprite(-199, 199, 32, 32)
var heart1 = createSprite(50, 50, 64, 60);
var heart2 = createSprite(120, 50, 64, 60);
var heart3 = createSprite(190, 50, 64, 60);
var arrow = createSprite(760, 499, 64, 64)
var arrowTop = createSprite(760, 466, 64, 2)
var arrowLeft = createSprite(726, 499, 2, 64)
var arrowRight = createSprite(790, 499, 2, 64)
var arrowBottom = createSprite(760, 532, 64, 2)
var heart_collectable = createSprite(100, 100, 16, 15)
var attack = "Punch"
var punch = player.setAnimation(attack)
var speed = 5


player.setAnimation('Player')
bush.setAnimation('box')
map.setAnimation('Map')
chest.setAnimation('Chest')
heart1.setAnimation('HeartFull')
heart2.setAnimation('HeartFull')
heart3.setAnimation('HeartFull')


function draw() {
  drawSprites();
  move()
  checkCollision();
  actions();
  enemies();
  collectables()
}



function enemies() {
  arrow.x -= arrowSpeed
  arrowTop.x -= arrowSpeed
  arrowLeft.x -= arrowSpeed
  arrowRight.x -= arrowSpeed
  arrowBottom.x -= arrowSpeed
  if (arrow.x === 25) {
    arrow.x = 775;
    arrowTop.x = 775
    arrowLeft.x = 775
    arrowRight.x = 775
    arrowBottom.x = 775
  }
  if (player.isTouching(arrowTop)) {
    player.y -= 102
    Player.hearts -= .5
  }
  if (player.isTouching(arrowLeft)) {
    player.x -= 102
    Player.hearts -= .5
  }
  if (player.isTouching(arrowRight)) {
    player.x += 10;
    Player.hearts -= .5
  }
  if (player.isTouching(arrowBottom)) {
    player.y += 102
    Player.hearts -= .5
  }
}
window.requestAnimationFrame(hearts)
function hearts() {
  if (Player.hearts === 3) {
    heart3.setAnimation("HeartFull")
    heart2.setAnimation("HeartFull")
    heart1.setAnimation("HeartFull")
}
if (Player.hearts === 2.5) {
    heart3.setAnimation("HeartHalf")
    heart2.setAnimation("HeartFull")
    heart1.setAnimation("HeartFull")
}
if (Player.hearts === 2) {
    heart3.setAnimation("HeartEmpty")
    heart2.setAnimation("HeartFull")
    heart1.setAnimation("HeartFull")
}
if (Player.hearts === 1.5) {
    heart3.setAnimation("HeartEmpty")
    heart2.setAnimation("HeartHalf")
    heart1.setAnimation("HeartFull")
}
if (Player.hearts === 1) {
    heart3.setAnimation("HeartEmpty")
    heart2.setAnimation("HeartEmpty")
    heart1.setAnimation("HeartFull")
}
if (Player.hearts === 0.5) {
    heart3.setAnimation("HeartEmpty")
    heart2.setAnimation("HeartEmpty")
    heart1.setAnimation("HeartHalf")
}
if (Player.hearts === 0) {
    heart3.setAnimation("HeartEmpty")
    heart2.setAnimation("HeartEmpty")
    heart1.setAnimation("HeartEmpty")
    died = true
    gameover()
}
window.requestAnimationFrame(hearts)
}

function collectables() {
  if (player.isTouching(heart_collectable)) {
    if (Player.hearts === 0.5) {
        Player.hearts = 1
        heart1.setAnimation('HeartFull')
      } else if (Player.hearts === 1) {
        Player.hearts = 1.5
        heart2.setAnimation('HeartHalf')
      } else if (Player.hearts === 1.5) {
        Player.hearts = 2
        heart2.setAnimation('HeartFull')
      } else if (Player.hearts === 2) {
        Player.hearts = 2.5
        heart3.setAnimation('HeartHalf')
      } else if (Player.hearts === 2.5) {
        Player.hearts = 3
        heart3.setAnimation('HeartFull')
      }
    heart_collectable.destroy()
  }
}



function move() {
    if (keyDown('w')) {
        player.y -= speed
        player.rotation = 180
        punch = null
        attack = "Player"
    }
    if (keyWentUp('w')) {
      attack = "Punch"
    }
    if (keyDown('a')) {
        player.x -= speed
        player.rotation = 90
        punch = null
        attack = "Player"
    }
    if (keyWentUp('a')) {
      attack = "Punch"
    }
    if (keyDown('s')) {
        player.y += speed
        player.rotation = 0
        punch = null
        attack = "Player"
    }
    if (keyWentUp('s')) {
      attack = "Punch"
    }
    if (keyDown('d')) {
        player.x += speed
        player.rotation = 270
        punch = null
        attack = "Player"
    }
    if (keyWentUp('d')) {
      attack = "Punch"
    }
    if (keyDown('up')) {
      player.y -= speed
      player.rotation = 180
      punch = null
      attack = "Player"
  }
  if (keyWentUp('up')) {
    attack = "Punch"
  }
  if (keyDown('left')) {
      player.x -= speed
      player.rotation = 90
      punch = null
      attack = "Player"
  }
  if (keyWentUp('left')) {
    attack = "Punch"
  }
  if (keyDown('down')) {
      player.y += speed
      player.rotation = 0
      punch = null
      attack = "Player"
  }
  if (keyWentUp('down')) {
    attack = "Punch"
  }
  if (keyDown('right')) {
      player.x += speed
      player.rotation = 270
      punch = null
      attack = "Player"
  }
  if (keyWentUp('right')) {
    attack = "Punch"
  }
  if (keyDown('r')) {
    player.rotationSpeed += 1000000000000
  }
  if (keyWentUp('r')) {
    player.rotationSpeed = 0
  }
}
function checkCollision() {
    if (player.isTouching(bush)) {
        player.collide(bush)
    }
    if (player.isTouching(boxTop)) {
        player.collide(boxTop)
        player.y -= 100
        camera.y -= 800
        boxTop.y -= 800
        boxLeft.y -= 800
        boxRight.y -= 800
        boxDown.y -= 800
        background.y -= 800
        heart1.y -= 800
        heart2.y -= 800
        heart3.y -= 800

    }
    if (player.isTouching(boxDown)) {
        player.collide(boxDown)
        player.y += 100
        camera.y += 800
        boxTop.y += 800
        boxLeft.y += 800
        boxRight.y += 800
        boxDown.y += 800
        background.y += 800
        heart1.y += 800
        heart2.y += 800
        heart3.y += 800
    }
    if (player.isTouching(boxRight)) {
        player.collide(boxRight)
        player.x += 100
        camera.x += 800
        boxTop.x += 800
        boxLeft.x += 800
        boxRight.x += 800
        boxDown.x += 800
        background.x += 800
        heart1.x += 800
        heart2.x += 800
        heart3.x += 800
    }
    if (player.isTouching(boxLeft)) {
        player.collide(boxLeft)
        player.x -= 100
        camera.x -= 800
        boxTop.x -= 800
        boxLeft.x -= 800
        boxRight.x -= 800
        boxDown.x -= 800
        background.x -= 800
        heart1.x -= 800
        heart2.x -= 800
        heart3.x -= 800
    }
    if (player.isTouching(grass)) {
      speed = 2.5
    } else {
      speed = 5
    }
    if (player.isTouching(chest)) {
      player.collide(chest)
      if (keyDown('e')) {
        chest.setAnimation('Chest_Opened')
        attack = "Sword"
      }
    }
}

function actions() {
  if (keyWentDown('space')) {
    player.setAnimation(attack)
  }
  if (keyWentUp('space')) {
    player.setAnimation('Player')
  }
}

function gameover() {
  heart1.setAnimation("HeartEmpty")
  setTimeout(() => {
    if (died === true) {
      document.getElementById('gameover').style.visibility = 'visible'
      document.getElementById('retry').style.visibility = 'visible'
      window.draw = 0;
    }
  }, 60);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
