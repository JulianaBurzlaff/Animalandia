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
    console.log("pause");
    console.log(chronometer.getCurrentTimeString());
    $("#close_game_modal").dialog("open");
  });
});
