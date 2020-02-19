<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<template>
  <div>
    <div id="chat-circle" class="btn btn-raised" >
      <div id="chat-overlay"></div>
      <i class="material-icons">speaker_phone</i>
    </div>

    <div class="chat-box">
      <div class="chat-box-header">
        Chat
        <span class="chat-box-toggle">
          <i class="material-icons">close</i>
        </span>
      </div>
      <div class="chat-box-body">
        <div class="chat-box-overlay"></div>
        <div class="chat-logs"></div>
        <!--chat-log -->
      </div>
      <div class="chat-input">
        <form>
          <input type="text" id="chat-input" placeholder="Send a message..." />
          <button type="submit" class="chat-submit" id="chat-submit">
            <i class="material-icons">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/style/css/chatUI.css";
import axios from "axios";
export default {
  name: "ChatUI",
  mounted() {
      $(function() {
      generate_message("안녕하세요! GrEAT봇 입니다<br> 사용법이 궁금하시면<br> '도움말'을 입력해 주세요!.");
      var INDEX = 0;
      $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if (msg.trim() == "") {
          return false;
        }
        var data = {
            'msg': msg
        }
        generate_message(msg, "self");
        setTimeout(function() {
          axios.post("http://localhost/chat", data           ).then(response => {
          generate_message(response.data.data.data);
          });
        }, 1000);
      });

      function generate_message(msg, type) {
        INDEX++;
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + '">';
        str += '          <span class="msg-avatar">';
        str += "          </span>";
        str += '          <div class="cm-msg-text">';
        str += msg;
        str += "          </div>";
        str += "        </div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX)
          .hide()
          .fadeIn(300);
        if (type == "self") {
          $("#chat-input").val("");
        }
        $(".chat-logs")
          .stop()
          .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
      }

      $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, "self");
      });

      $("#chat-circle").click(function() {
        $("#chat-circle").toggle("scale");
        $(".chat-box").toggle("scale");
      });

      $(".chat-box-toggle").click(function() {
        $("#chat-circle").toggle("scale");
        $(".chat-box").toggle("scale");
      });
    });
  }
};
</script>

<style></style>
