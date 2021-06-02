$(document).ready(function () {
  $("#map").hide();
  $(".fase").hide();
  $("#close_game").hide();
  $("#close_game_modal").hide();
  $(".modal_fase").hide();
  $(".icons").hide();
  $(".modal_help").hide();
  $("#fase_complete").hide();
  $("#level_complete").hide();
  $("#modal_rank").hide();
  $(".error").hide();
  $("#modal_collection").hide();
  $("#modal_quit_game").hide();
  $("body").css("display", "flex");

  //open map
  $("#play_button").on("click", function () {
    $("#name_validation").remove();
    if (!$("#nick").val()) {
      $("#initial-page").append(
        '<div id="name_validation">O campo de nome é obrigatório</div>'
      );
    } else {
      const nick = $("#nick").val();
      if (checkPlayer.isPlayer(nick) == true) {
        $("#initial-page").append(
          '<div id="name_validation">Este nome já está em uso</div>'
        );
      } else {
        $(".wrapper").css("display", "flex");
        $("#initial-page, #map").toggle();
        $("#back").show();
        $("#help").show();
        $("#soundon").show();
        $("#rank").show();
        $("#collection").show();
        audioBackground.playSound("map");
        const playerName = $("#nick").val();
        player.setName(playerName);
      }
    }
  });

  //back to start
  $("#quit_game").on("click", function () {
    $(".wrapper").css("display", "none");
    $("#map, #initial-page").toggle();
    $("#back").hide();
    $("#help").hide();
    $("#soundon").hide();
    $("#soundoff").hide();
    $("#rank").hide();
    $("#collection").hide();
    $("#nick").val("");
    audio.stopSound();
    audioBackground.stopSound();
  });

  //stop sound
  $("#soundon").on("click", function () {
    $("#soundon").hide();
    $("#soundoff").show();
    audio.muted();
    audioBackground.muted();
  });

  //play sound
  $("#soundoff").on("click", function () {
    $("#soundoff").hide();
    $("#soundon").show();
    audio.muted();
    audioBackground.muted();
  });

  //open fase 1
  $("#play_fase1").on("click", function () {
    $("#map, #fase1").toggle();
    $("#back").hide();
    $("#fase1").addClass("currentFase");
  });

  //open fase 2
  $("#play_fase2").on("click", function () {
    $("#map, #fase2").toggle();
    $("#back").hide();
    $("#fase2").addClass("currentFase");
  });

  //open fase 3
  $("#play_fase3").on("click", function () {
    $("#map, #fase3").toggle();
    $("#back").hide();
    $("#fase3").addClass("currentFase");
  });

  //open fase 4
  $("#play_fase4").on("click", function () {
    $("#map, #fase4").toggle();
    $("#back").hide();
    $("#fase4").addClass("currentFase");
  });

  //open fase 5
  $("#play_fase5").on("click", function () {
    $("#map, #fase5").toggle();
    $("#back").hide();
    $("#fase5").addClass("currentFase");
  });

  //close fase and go back to map
  $(".close_game").on("click", function () {
    $(".fase").hide();
    $("#map").show();
    $("#back").show();
  });

  //open the quit-fase modal
  $(".close_fase").on("click", function () {
    $("#close_game_modal").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
    chronometer.pause();
    $("#close_game_modal").dialog("open");
  });

  $(".cloud").each(function() {move(this);});

  $("#play_button").on("click",function () {
    if($("#nick").val()){
      $(".cloud").stop();
      $(".cloud").hide();
    }
  });

  $("#play_fase1").on("click", function () {
    prehistoryFase();
    chronometer.start();

    audioBackground.stopSound();
    if (audioBackground.isMuted()) {
      audioBackground.setSound("prehistory");
    } else {
      audioBackground.playSound("prehistory");
    }
  });

  $("#play_fase2").on("click", function () {
    forestFase();
    chronometer.start();

    audioBackground.stopSound();
    if (audioBackground.isMuted()) {
      audioBackground.setSound("forest");
    } else {
      audioBackground.playSound("forest");
    }
  });

  $("#play_fase3").on("click", function () {
    oceanFase();
    chronometer.start();

    audioBackground.stopSound();
    if (audioBackground.isMuted()) {
      audioBackground.setSound("ocean");
    } else {
      audioBackground.playSound("ocean");
    }
  });

  $("#play_fase4").on("click", function () {
    skyFase();
    chronometer.start();

    audioBackground.stopSound();
    if (audioBackground.isMuted()) {
      audioBackground.setSound("sky");
    } else {
      audioBackground.playSound("sky");
    }
  });

  $("#play_fase5").on("click", function () {
    gardenFase();
    chronometer.start();

    audioBackground.stopSound();
    if (audioBackground.isMuted()) {
      audioBackground.setSound("garden");
    } else {
      audioBackground.playSound("garden");
    }
  });

  $(".close_fase").on("click", function () {
    chronometer.pause();
  });

  $("#close_game_modal .close_game").on("click", function () {
    $(".currentFase").removeClass("currentFase");
    chronometer.stop();
    faseControler.resetAll();
    time.clear();
    score.clear();

    audioBackground.stopSound();
    if (!audioBackground.isMuted()) audioBackground.playSound("map");
    else audioBackground.setSound("map");
  });

  $("#close_game_modal .continue_game").on("click", function () {
    chronometer.start();
  });

  $("#level_complete button").on("click", function () {
    $(".score").html(faseControler.getLevel());

    switch (faseControler.getFaseName()) {
      case "prehistory":
        prehistoryFase();
        break;

      case "forest":
        forestFase();
        break;

      case "ocean":
        oceanFase();
        break;

      case "sky":
        skyFase();
        break;

      case "garden":
        gardenFase();
        break;
    }

    chronometer.start();
    faseControler.resetDropped();
  });

  $("#quit_game").on("click", function () {
    time.clear();
    score.clear();
    stickers.clear();
    player.clear();
    $(".stamp").html("");
    $(".cloud").each(function() {move(this);});
    $(".cloud").show();
  });

});

function shuffler(_arr1, _arr2) {
  const itemsInTheScene = [];

  for (let element of _arr1) {
    itemsInTheScene.push(element);
  }

  for (let element of _arr2) {
    itemsInTheScene.push(element);
  }

  shuffle.setArray(itemsInTheScene);
  const shuffledItemsInTheScene = shuffle.getShuffledArray();

  return shuffledItemsInTheScene;
}

function addDragAndDrop() {
  $(".sticker").draggable({
    revert: "invalid",
    containment: ".currentFase",
    cursorAt: {
      top: 45,
      left: 50,
    },
  });

  $(".box").droppable({
    hoverClass: "box-hover",
    tolerance: "intersect",
    drop: function (_event, _ui) {
      if (_ui.draggable.hasClass("object")) {
        if (!audio.isMuted()) {
          audio.playSound("drop-hit");
        }

        _ui.draggable.fadeOut(600);
        faseControler.dropped();

        if (
          faseControler.getDropped() == faseControler.getNeedToBeDropped() &&
          faseControler.getLevel() != 3
        ) {
          chronometer.stop();
          $(".sticker").draggable("disable");
          const conclusionTime = chronometer.getMilisecondTime();
          time.setTimeLevel(conclusionTime);
          faseControler.levelUp();

          setTimeout(levelComplete, 1000);
        }
        if (
          faseControler.getDropped() == faseControler.getNeedToBeDropped() &&
          faseControler.getLevel() == 3
        ) {
          chronometer.stop();
          $(".sticker").draggable("disable");
          const conclusionTime = chronometer.getMilisecondTime();
          time.setTimeLevel(conclusionTime);
          const totalTime = time.getTotalTime();


          score.setTime(totalTime);
          const faseScore = score.getScore();

          player.setPlayerData(totalTime, faseScore);

          setTimeout(faseComplete, 1000);
        }
      } else {
        _ui.draggable.draggable("option", "revert", true);
        $(".error").show();
        setTimeout(() => {
          $(".error").hide();
        }, 1500);
        if (!audio.isMuted()) {
          audio.playSound("drop-error");
        }
      }
    },
  });
}

//finish fase and go back to map
function backMap() {
  $(".currentFase").removeClass("currentFase");
  $(".fase").hide();
  $("#map").show();
  $("#back").show();
}

//open end game modal
function faseComplete() {
  if (!audio.isMuted()) {
    audio.playSound("fase");
  }

  $("#fase_complete").html(`
    <img class="fase_complete_bg" src="images/gif.gif" alt="gif" />
    <p>Parabéns!!</p>
    <p>Você completou essa fase, fez ${score.getScore()} pontos e ganhou uma figurinha!</p>
    <p id="sticker-fase"></p>
    <p> <a id="back_map" onclick="backMap()" href="#" rel="modal:close"><button>Voltar ao mapa</button></a></p>
  `);

  $("#fase_complete").modal({
    escapeClose: false,
    clickClose: false,
    showClose: false,
  });

  try {
    $("#fase_complete").dialog("open");
  } catch (error) {}

  $("#fase_complete button").on("click", function () {
    $(".score").html("1");

    audioBackground.stopSound();
    if (!audioBackground.isMuted()) {
      audioBackground.playSound("map");
    } else {
      audioBackground.setSound("map");
    }
    faseControler.resetAll();
    time.clear();
    score.clear();
  });
  saveStickers();

  const playerData = player.getPlayerData();

  insertPlayerRanking({
    name: playerData.name,
    score: playerData.score,
    time: playerData.time,
  });
}

//chamar a tela de fim de nivel
function levelComplete() {
  if (!audio.isMuted()) {
    audio.playCongratulationsSound();
  }
  $("#level_complete").modal({
    escapeClose: false,
    clickClose: false,
    showClose: false,
  });

  $("#level_complete").dialog("open");
}

function prehistoryFase() {
  faseControler.setFaseName("prehistory");

  switch (faseControler.getLevel()) {
    case 1:
      raffle.setMaxElementsToBeRaffled("3");
      break;

    case 2:
      raffle.setMaxElementsToBeRaffled("4");
      break;

    case 3:
      raffle.setMaxElementsToBeRaffled("5");
      break;
  }

  const numberOfAnimals = raffle.getNumberOfAnimals();
  const numberOfObjects = raffle.getNumberOfObjects();
  faseControler.setNeedToBeDropped(`${numberOfObjects}`);

  prehistoryAnimals.setNumberOfAnimals(`${numberOfAnimals}`);
  prehistoryObjects.setNumberOfObjects(`${numberOfObjects}`);

  const raffledAnimals = prehistoryAnimals.getSortedAnimals();
  const raffledObjects = prehistoryObjects.getSortedObjects();

  const shuffledItemsInTheScene = shuffler(raffledAnimals, raffledObjects);

  positionStickers(shuffledItemsInTheScene);

  addDragAndDrop();
}

function forestFase() {
  faseControler.setFaseName("forest");

  switch (faseControler.getLevel()) {
    case 1:
      raffle.setMaxElementsToBeRaffled("3");
      break;

    case 2:
      raffle.setMaxElementsToBeRaffled("4");
      break;

    case 3:
      raffle.setMaxElementsToBeRaffled("5");
      break;
  }

  const numberOfAnimals = raffle.getNumberOfAnimals();
  const numberOfObjects = raffle.getNumberOfObjects();
  faseControler.setNeedToBeDropped(`${numberOfObjects}`);

  forestAnimals.setNumberOfAnimals(`${numberOfAnimals}`);
  forestObjects.setNumberOfObjects(`${numberOfObjects}`);

  const raffledAnimals = forestAnimals.getSortedAnimals();
  const raffledObjects = forestObjects.getSortedObjects();

  const shuffledItemsInTheScene = shuffler(raffledAnimals, raffledObjects);

  positionStickers(shuffledItemsInTheScene);

  addDragAndDrop();
}

function oceanFase() {
  faseControler.setFaseName("ocean");

  switch (faseControler.getLevel()) {
    case 1:
      raffle.setMaxElementsToBeRaffled("3");
      break;

    case 2:
      raffle.setMaxElementsToBeRaffled("4");
      break;

    case 3:
      raffle.setMaxElementsToBeRaffled("5");
      break;
  }

  const numberOfAnimals = raffle.getNumberOfAnimals();
  const numberOfObjects = raffle.getNumberOfObjects();
  faseControler.setNeedToBeDropped(`${numberOfObjects}`);

  oceanAnimals.setNumberOfAnimals(`${numberOfAnimals}`);
  oceanObjects.setNumberOfObjects(`${numberOfObjects}`);

  const raffledAnimals = oceanAnimals.getSortedAnimals();
  const raffledObjects = oceanObjects.getSortedObjects();

  const shuffledItemsInTheScene = shuffler(raffledAnimals, raffledObjects);

  positionStickers(shuffledItemsInTheScene);

  addDragAndDrop();
}

function skyFase() {
  faseControler.setFaseName("sky");

  switch (faseControler.getLevel()) {
    case 1:
      raffle.setMaxElementsToBeRaffled("3");
      break;

    case 2:
      raffle.setMaxElementsToBeRaffled("4");
      break;

    case 3:
      raffle.setMaxElementsToBeRaffled("5");
      break;
  }

  const numberOfAnimals = raffle.getNumberOfAnimals();
  const numberOfObjects = raffle.getNumberOfObjects();
  faseControler.setNeedToBeDropped(`${numberOfObjects}`);

  skyAnimals.setNumberOfAnimals(`${numberOfAnimals}`);
  skyObjects.setNumberOfObjects(`${numberOfObjects}`);

  const raffledAnimals = skyAnimals.getSortedAnimals();
  const raffledObjects = skyObjects.getSortedObjects();

  const shuffledItemsInTheScene = shuffler(raffledAnimals, raffledObjects);

  positionStickers(shuffledItemsInTheScene);

  addDragAndDrop();
}

function gardenFase() {
  faseControler.setFaseName("garden");

  switch (faseControler.getLevel()) {
    case 1:
      raffle.setMaxElementsToBeRaffled("3");
      break;

    case 2:
      raffle.setMaxElementsToBeRaffled("4");
      break;

    case 3:
      raffle.setMaxElementsToBeRaffled("5");
      break;
  }

  const numberOfAnimals = raffle.getNumberOfAnimals();
  const numberOfObjects = raffle.getNumberOfObjects();
  faseControler.setNeedToBeDropped(`${numberOfObjects}`);

  gardenAnimals.setNumberOfAnimals(`${numberOfAnimals}`);
  gardenObjects.setNumberOfObjects(`${numberOfObjects}`);

  const raffledAnimals = gardenAnimals.getSortedAnimals();
  const raffledObjects = gardenObjects.getSortedObjects();

  const shuffledItemsInTheScene = shuffler(raffledAnimals, raffledObjects);

  positionStickers(shuffledItemsInTheScene);

  addDragAndDrop();
}

function positionStickers(_arrayStickers) {
  const shuffledItemsInTheScene = _arrayStickers;

  $(".position1").html("");
  $(".position2").html("");
  $(".position3").html("");
  $(".position4").html("");
  $(".position5").html("");

  if (faseControler.getLevel() == 1) {
    $(".currentFase .position1").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[0].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[0].name
      }.png" />`
    );
    $(".currentFase .position2").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[1].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[1].name
      }.png" />`
    );
    $(".currentFase .position3").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[2].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[2].name
      }.png" />`
    );
  } else if (faseControler.getLevel() == 2) {
    $(".currentFase .position1").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[0].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[0].name
      }.png" />`
    );
    $(".currentFase .position2").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[1].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[1].name
      }.png" />`
    );
    $(".currentFase .position3").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[2].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[2].name
      }.png" />`
    );
    $(".currentFase .position4").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[3].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[3].name
      }.png" />`
    );
  } else {
    $(".currentFase .position1").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[0].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[0].name
      }.png" />`
    );
    $(".currentFase .position2").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[1].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[1].name
      }.png" />`
    );
    $(".currentFase .position3").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[2].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[2].name
      }.png" />`
    );
    $(".currentFase .position4").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[3].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[3].name
      }.png" />`
    );
    $(".currentFase .position5").html(
      `<img class="sticker ${
        shuffledItemsInTheScene[4].type
      }" src="../images/${faseControler.getFaseName()}/${
        shuffledItemsInTheScene[4].name
      }.png" />`
    );
  }
}

function saveStickers(){
  stickers.setFase(faseControler.getFaseName());
  stickers.setStickers();

  const sticker = stickers.getLastSticker();
  if(sticker){
    $(`#${sticker}`).append(`<img class="my_stickers ${faseControler.getFaseName()}-album" src="images/${faseControler.getFaseName()}/${sticker}.png">`);
  }

  $("#sticker-fase").html(`<img class="my_stickers" src="images/${faseControler.getFaseName()}/${sticker}.png">`)
}

function move(cloud) {
  $(cloud).animate(
    {
      left: (Math.random() * $(window).width()) + 'px',
      delay: 20000,
    },
    Math.random() * 40500,
    function() {
      move(this);
    }
  )
}