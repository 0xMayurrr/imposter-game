import {
  GcloudExecutor
} from "./chunk-fmhrn6cg.js";
import {
  require_cli_spinners
} from "./chunk-nq68kghz.js";
import {
  eastAsianWidth
} from "./chunk-hc7sdwmn.js";
import {
  isUnicodeSupported
} from "./chunk-4jygt4d6.js";
import {
  onExit
} from "./chunk-tz7wnw4s.js";
import {
  source_default
} from "./chunk-3sfn889r.js";
import {
  __commonJS,
  __toESM
} from "./chunk-9wyra8hs.js";

// node_modules/ora/node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS((exports, module) => {
  module.exports = () => {
    return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
  };
});

// src/services/stitch/iam.ts
class StitchIamService {
  executor;
  constructor(executor) {
    this.executor = executor;
  }
  async configureIAM(input) {
    try {
      const role = "roles/serviceusage.serviceUsageConsumer";
      const member = `user:${input.userEmail}`;
      const result = await this.executor.exec([
        "projects",
        "add-iam-policy-binding",
        input.projectId,
        `--member=${member}`,
        `--role=${role}`,
        "--condition=None",
        "--quiet"
      ]);
      if (!result.success) {
        const errorMsg = result.stderr || result.error || result.stdout || "Unknown error";
        return {
          success: false,
          error: {
            code: "IAM_CONFIG_FAILED",
            message: `Failed to configure IAM permissions: ${errorMsg}`,
            suggestion: "Ensure you have Owner or Editor role on the project",
            recoverable: true,
            details: `Exit code: ${result.exitCode}
Stderr: ${result.stderr}
Stdout: ${result.stdout}`
          }
        };
      }
      return {
        success: true,
        data: {
          role,
          member
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "IAM_CONFIG_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
  async checkIAMRole(input) {
    try {
      const role = "roles/serviceusage.serviceUsageConsumer";
      const member = `user:${input.userEmail}`;
      const result = await this.executor.exec([
        "projects",
        "get-iam-policy",
        input.projectId,
        `--flatten=bindings[].members`,
        `--filter=bindings.role=${role} AND bindings.members=${member}`,
        "--format=value(bindings.members)"
      ]);
      return result.success && result.stdout.trim().includes(member);
    } catch {
      return false;
    }
  }
}

// src/services/stitch/api.ts
class StitchApiService {
  executor;
  constructor(executor) {
    this.executor = executor;
  }
  async enableAPI(input) {
    try {
      const api = "stitch.googleapis.com";
      const result = await this.executor.exec(["beta", "services", "mcp", "enable", api, `--project=${input.projectId}`, "--quiet"]);
      if (!result.success) {
        const errorMsg = result.stderr || result.error || result.stdout || "Unknown error";
        return {
          success: false,
          error: {
            code: "API_ENABLE_FAILED",
            message: `Failed to enable Stitch API: ${errorMsg}`,
            suggestion: "Ensure the project has billing enabled",
            recoverable: true,
            details: `Exit code: ${result.exitCode}
Stderr: ${result.stderr}
Stdout: ${result.stdout}`
          }
        };
      }
      return {
        success: true,
        data: {
          api,
          enabled: true
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "API_ENABLE_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
  async checkAPIEnabled(input) {
    try {
      const result = await this.executor.exec([
        "services",
        "list",
        `--project=${input.projectId}`,
        "--enabled",
        "--filter=name:stitch.googleapis.com",
        "--format=value(name)"
      ]);
      return result.success && result.stdout.trim().includes("stitch.googleapis.com");
    } catch {
      return false;
    }
  }
}

// src/services/stitch/connection.ts
class StitchConnectionService {
  async testConnectionWithApiKey(input) {
    try {
      const url = process.env.STITCH_HOST || "https://stitch.googleapis.com/mcp";
      const payload = {
        method: "tools/call",
        jsonrpc: "2.0",
        params: {
          name: "list_projects",
          arguments: {}
        },
        id: 1
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/event-stream",
          "X-Goog-Api-Key": input.apiKey
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        let errorDetails = "";
        let errorMessage = `API request failed with status ${response.status}`;
        try {
          const errorBody = await response.json();
          errorDetails = JSON.stringify(errorBody, null, 2);
          if (errorBody?.error?.message) {
            errorMessage = errorBody.error.message;
          }
        } catch {
          try {
            errorDetails = await response.text();
          } catch {
            errorDetails = `Status ${response.status}: ${response.statusText}`;
          }
        }
        return {
          success: false,
          error: {
            code: response.status === 403 ? "PERMISSION_DENIED" : "CONNECTION_TEST_FAILED",
            message: errorMessage,
            suggestion: response.status === 403 ? "Check that your API key is valid and has access to the Stitch API" : "Verify API key configuration and try again",
            recoverable: true,
            details: errorDetails
          }
        };
      }
      const data = await response.json();
      return {
        success: true,
        data: {
          connected: true,
          statusCode: response.status,
          url,
          response: data
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "CONNECTION_TEST_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
  async testConnection(input) {
    try {
      const url = process.env.STITCH_HOST || "https://stitch.googleapis.com/mcp";
      const payload = {
        method: "tools/call",
        jsonrpc: "2.0",
        params: {
          name: "list_projects",
          arguments: {}
        },
        id: 1
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/event-stream",
          Authorization: `Bearer ${input.accessToken}`,
          "X-Goog-User-Project": input.projectId
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        let errorDetails = "";
        let errorMessage = `API request failed with status ${response.status}`;
        try {
          const errorBody = await response.json();
          errorDetails = JSON.stringify(errorBody, null, 2);
          if (errorBody?.error?.message) {
            errorMessage = errorBody.error.message;
          }
        } catch {
          try {
            errorDetails = await response.text();
          } catch {
            errorDetails = `Status ${response.status}: ${response.statusText}`;
          }
        }
        return {
          success: false,
          error: {
            code: response.status === 403 ? "PERMISSION_DENIED" : "CONNECTION_TEST_FAILED",
            message: errorMessage,
            suggestion: response.status === 403 ? "Check IAM permissions and ensure API is enabled" : "Verify project configuration and try again",
            recoverable: true,
            details: errorDetails
          }
        };
      }
      const data = await response.json();
      return {
        success: true,
        data: {
          connected: true,
          statusCode: response.status,
          url,
          response: data
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "CONNECTION_TEST_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
}

// src/services/stitch/handler.ts
class StitchHandler {
  executor;
  iamService;
  apiService;
  connectionService;
  constructor() {
    this.executor = new GcloudExecutor;
    this.iamService = new StitchIamService(this.executor);
    this.apiService = new StitchApiService(this.executor);
    this.connectionService = new StitchConnectionService;
  }
  async configureIAM(input) {
    return this.iamService.configureIAM(input);
  }
  async enableAPI(input) {
    return this.apiService.enableAPI(input);
  }
  async checkIAMRole(input) {
    return this.iamService.checkIAMRole(input);
  }
  async checkAPIEnabled(input) {
    return this.apiService.checkAPIEnabled(input);
  }
  async testConnectionWithApiKey(input) {
    return this.connectionService.testConnectionWithApiKey(input);
  }
  async testConnection(input) {
    return this.connectionService.testConnection(input);
  }
}

// node_modules/ora/index.js
import process6 from "node:process";

// node_modules/ora/node_modules/cli-cursor/index.js
import process3 from "node:process";

// node_modules/ora/node_modules/cli-cursor/node_modules/restore-cursor/index.js
import process2 from "node:process";

// node_modules/mimic-function/index.js
var copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
var canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
var changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
var changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  const { writable, enumerable, configurable } = toStringDescriptor;
  Object.defineProperty(to, "toString", { value: newToString, writable, enumerable, configurable });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}

// node_modules/onetime/index.js
var calledFunctions = new WeakMap;
var onetime = (function_, options = {}) => {
  if (typeof function_ !== "function") {
    throw new TypeError("Expected a function");
  }
  let returnValue;
  let callCount = 0;
  const functionName = function_.displayName || function_.name || "<anonymous>";
  const onetime2 = function(...arguments_) {
    calledFunctions.set(onetime2, ++callCount);
    if (callCount === 1) {
      returnValue = function_.apply(this, arguments_);
      function_ = undefined;
    } else if (options.throw === true) {
      throw new Error(`Function \`${functionName}\` can only be called once`);
    }
    return returnValue;
  };
  mimicFunction(onetime2, function_);
  calledFunctions.set(onetime2, callCount);
  return onetime2;
};
onetime.callCount = (function_) => {
  if (!calledFunctions.has(function_)) {
    throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
  }
  return calledFunctions.get(function_);
};
var onetime_default = onetime;

// node_modules/ora/node_modules/cli-cursor/node_modules/restore-cursor/index.js
var terminal = process2.stderr.isTTY ? process2.stderr : process2.stdout.isTTY ? process2.stdout : undefined;
var restoreCursor = terminal ? onetime_default(() => {
  onExit(() => {
    terminal.write("\x1B[?25h");
  }, { alwaysLast: true });
}) : () => {};
var restore_cursor_default = restoreCursor;

// node_modules/ora/node_modules/cli-cursor/index.js
var isHidden = false;
var cliCursor = {};
cliCursor.show = (writableStream = process3.stderr) => {
  if (!writableStream.isTTY) {
    return;
  }
  isHidden = false;
  writableStream.write("\x1B[?25h");
};
cliCursor.hide = (writableStream = process3.stderr) => {
  if (!writableStream.isTTY) {
    return;
  }
  restore_cursor_default();
  isHidden = true;
  writableStream.write("\x1B[?25l");
};
cliCursor.toggle = (force, writableStream) => {
  if (force !== undefined) {
    isHidden = force;
  }
  if (isHidden) {
    cliCursor.show(writableStream);
  } else {
    cliCursor.hide(writableStream);
  }
};
var cli_cursor_default = cliCursor;

// node_modules/ora/index.js
var import_cli_spinners = __toESM(require_cli_spinners(), 1);

// node_modules/ora/node_modules/log-symbols/node_modules/is-unicode-supported/index.js
import process4 from "node:process";
function isUnicodeSupported2() {
  if (process4.platform !== "win32") {
    return process4.env.TERM !== "linux";
  }
  return Boolean(process4.env.CI) || Boolean(process4.env.WT_SESSION) || Boolean(process4.env.TERMINUS_SUBLIME) || process4.env.ConEmuTask === "{cmd::Cmder}" || process4.env.TERM_PROGRAM === "Terminus-Sublime" || process4.env.TERM_PROGRAM === "vscode" || process4.env.TERM === "xterm-256color" || process4.env.TERM === "alacritty" || process4.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}

// node_modules/ora/node_modules/log-symbols/index.js
var main = {
  info: source_default.blue("ℹ"),
  success: source_default.green("✔"),
  warning: source_default.yellow("⚠"),
  error: source_default.red("✖")
};
var fallback = {
  info: source_default.blue("i"),
  success: source_default.green("√"),
  warning: source_default.yellow("‼"),
  error: source_default.red("×")
};
var logSymbols = isUnicodeSupported2() ? main : fallback;
var log_symbols_default = logSymbols;

// node_modules/ora/node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:\\u001B\\][\\s\\S]*?${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern = `${osc}|${csi}`;
  return new RegExp(pattern, onlyFirst ? undefined : "g");
}

// node_modules/ora/node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  if (!string.includes("\x1B") && !string.includes("")) {
    return string;
  }
  return string.replace(regex, "");
}

// node_modules/ora/node_modules/string-width/index.js
var import_emoji_regex = __toESM(require_emoji_regex(), 1);
var segmenter = new Intl.Segmenter;
var defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if (import_emoji_regex.default().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}

// node_modules/is-interactive/index.js
function isInteractive({ stream = process.stdout } = {}) {
  return Boolean(stream && stream.isTTY && process.env.TERM !== "dumb" && !("CI" in process.env));
}

// node_modules/stdin-discarder/index.js
import process5 from "node:process";
var ASCII_ETX_CODE = 3;

class StdinDiscarder {
  #activeCount = 0;
  start() {
    this.#activeCount++;
    if (this.#activeCount === 1) {
      this.#realStart();
    }
  }
  stop() {
    if (this.#activeCount <= 0) {
      throw new Error("`stop` called more times than `start`");
    }
    this.#activeCount--;
    if (this.#activeCount === 0) {
      this.#realStop();
    }
  }
  #realStart() {
    if (process5.platform === "win32" || !process5.stdin.isTTY) {
      return;
    }
    process5.stdin.setRawMode(true);
    process5.stdin.on("data", this.#handleInput);
    process5.stdin.resume();
  }
  #realStop() {
    if (!process5.stdin.isTTY) {
      return;
    }
    process5.stdin.off("data", this.#handleInput);
    process5.stdin.pause();
    process5.stdin.setRawMode(false);
  }
  #handleInput(chunk) {
    if (chunk[0] === ASCII_ETX_CODE) {
      process5.emit("SIGINT");
    }
  }
}
var stdinDiscarder = new StdinDiscarder;
var stdin_discarder_default = stdinDiscarder;

// node_modules/ora/index.js
var import_cli_spinners2 = __toESM(require_cli_spinners(), 1);

class Ora {
  #linesToClear = 0;
  #isDiscardingStdin = false;
  #lineCount = 0;
  #frameIndex = -1;
  #lastSpinnerFrameTime = 0;
  #options;
  #spinner;
  #stream;
  #id;
  #initialInterval;
  #isEnabled;
  #isSilent;
  #indent;
  #text;
  #prefixText;
  #suffixText;
  color;
  constructor(options) {
    if (typeof options === "string") {
      options = {
        text: options
      };
    }
    this.#options = {
      color: "cyan",
      stream: process6.stderr,
      discardStdin: true,
      hideCursor: true,
      ...options
    };
    this.color = this.#options.color;
    this.spinner = this.#options.spinner;
    this.#initialInterval = this.#options.interval;
    this.#stream = this.#options.stream;
    this.#isEnabled = typeof this.#options.isEnabled === "boolean" ? this.#options.isEnabled : isInteractive({ stream: this.#stream });
    this.#isSilent = typeof this.#options.isSilent === "boolean" ? this.#options.isSilent : false;
    this.text = this.#options.text;
    this.prefixText = this.#options.prefixText;
    this.suffixText = this.#options.suffixText;
    this.indent = this.#options.indent;
    if (process6.env.NODE_ENV === "test") {
      this._stream = this.#stream;
      this._isEnabled = this.#isEnabled;
      Object.defineProperty(this, "_linesToClear", {
        get() {
          return this.#linesToClear;
        },
        set(newValue) {
          this.#linesToClear = newValue;
        }
      });
      Object.defineProperty(this, "_frameIndex", {
        get() {
          return this.#frameIndex;
        }
      });
      Object.defineProperty(this, "_lineCount", {
        get() {
          return this.#lineCount;
        }
      });
    }
  }
  get indent() {
    return this.#indent;
  }
  set indent(indent = 0) {
    if (!(indent >= 0 && Number.isInteger(indent))) {
      throw new Error("The `indent` option must be an integer from 0 and up");
    }
    this.#indent = indent;
    this.#updateLineCount();
  }
  get interval() {
    return this.#initialInterval ?? this.#spinner.interval ?? 100;
  }
  get spinner() {
    return this.#spinner;
  }
  set spinner(spinner) {
    this.#frameIndex = -1;
    this.#initialInterval = undefined;
    if (typeof spinner === "object") {
      if (spinner.frames === undefined) {
        throw new Error("The given spinner must have a `frames` property");
      }
      this.#spinner = spinner;
    } else if (!isUnicodeSupported()) {
      this.#spinner = import_cli_spinners.default.line;
    } else if (spinner === undefined) {
      this.#spinner = import_cli_spinners.default.dots;
    } else if (spinner !== "default" && import_cli_spinners.default[spinner]) {
      this.#spinner = import_cli_spinners.default[spinner];
    } else {
      throw new Error(`There is no built-in spinner named '${spinner}'. See https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json for a full list.`);
    }
  }
  get text() {
    return this.#text;
  }
  set text(value = "") {
    this.#text = value;
    this.#updateLineCount();
  }
  get prefixText() {
    return this.#prefixText;
  }
  set prefixText(value = "") {
    this.#prefixText = value;
    this.#updateLineCount();
  }
  get suffixText() {
    return this.#suffixText;
  }
  set suffixText(value = "") {
    this.#suffixText = value;
    this.#updateLineCount();
  }
  get isSpinning() {
    return this.#id !== undefined;
  }
  #getFullPrefixText(prefixText = this.#prefixText, postfix = " ") {
    if (typeof prefixText === "string" && prefixText !== "") {
      return prefixText + postfix;
    }
    if (typeof prefixText === "function") {
      return prefixText() + postfix;
    }
    return "";
  }
  #getFullSuffixText(suffixText = this.#suffixText, prefix = " ") {
    if (typeof suffixText === "string" && suffixText !== "") {
      return prefix + suffixText;
    }
    if (typeof suffixText === "function") {
      return prefix + suffixText();
    }
    return "";
  }
  #updateLineCount() {
    const columns = this.#stream.columns ?? 80;
    const fullPrefixText = this.#getFullPrefixText(this.#prefixText, "-");
    const fullSuffixText = this.#getFullSuffixText(this.#suffixText, "-");
    const fullText = " ".repeat(this.#indent) + fullPrefixText + "--" + this.#text + "--" + fullSuffixText;
    this.#lineCount = 0;
    for (const line of stripAnsi(fullText).split(`
`)) {
      this.#lineCount += Math.max(1, Math.ceil(stringWidth(line, { countAnsiEscapeCodes: true }) / columns));
    }
  }
  get isEnabled() {
    return this.#isEnabled && !this.#isSilent;
  }
  set isEnabled(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("The `isEnabled` option must be a boolean");
    }
    this.#isEnabled = value;
  }
  get isSilent() {
    return this.#isSilent;
  }
  set isSilent(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("The `isSilent` option must be a boolean");
    }
    this.#isSilent = value;
  }
  frame() {
    const now = Date.now();
    if (this.#frameIndex === -1 || now - this.#lastSpinnerFrameTime >= this.interval) {
      this.#frameIndex = ++this.#frameIndex % this.#spinner.frames.length;
      this.#lastSpinnerFrameTime = now;
    }
    const { frames } = this.#spinner;
    let frame = frames[this.#frameIndex];
    if (this.color) {
      frame = source_default[this.color](frame);
    }
    const fullPrefixText = typeof this.#prefixText === "string" && this.#prefixText !== "" ? this.#prefixText + " " : "";
    const fullText = typeof this.text === "string" ? " " + this.text : "";
    const fullSuffixText = typeof this.#suffixText === "string" && this.#suffixText !== "" ? " " + this.#suffixText : "";
    return fullPrefixText + frame + fullText + fullSuffixText;
  }
  clear() {
    if (!this.#isEnabled || !this.#stream.isTTY) {
      return this;
    }
    this.#stream.cursorTo(0);
    for (let index = 0;index < this.#linesToClear; index++) {
      if (index > 0) {
        this.#stream.moveCursor(0, -1);
      }
      this.#stream.clearLine(1);
    }
    if (this.#indent || this.lastIndent !== this.#indent) {
      this.#stream.cursorTo(this.#indent);
    }
    this.lastIndent = this.#indent;
    this.#linesToClear = 0;
    return this;
  }
  render() {
    if (this.#isSilent) {
      return this;
    }
    this.clear();
    this.#stream.write(this.frame());
    this.#linesToClear = this.#lineCount;
    return this;
  }
  start(text) {
    if (text) {
      this.text = text;
    }
    if (this.#isSilent) {
      return this;
    }
    if (!this.#isEnabled) {
      if (this.text) {
        this.#stream.write(`- ${this.text}
`);
      }
      return this;
    }
    if (this.isSpinning) {
      return this;
    }
    if (this.#options.hideCursor) {
      cli_cursor_default.hide(this.#stream);
    }
    if (this.#options.discardStdin && process6.stdin.isTTY) {
      this.#isDiscardingStdin = true;
      stdin_discarder_default.start();
    }
    this.render();
    this.#id = setInterval(this.render.bind(this), this.interval);
    return this;
  }
  stop() {
    if (!this.#isEnabled) {
      return this;
    }
    clearInterval(this.#id);
    this.#id = undefined;
    this.#frameIndex = 0;
    this.clear();
    if (this.#options.hideCursor) {
      cli_cursor_default.show(this.#stream);
    }
    if (this.#options.discardStdin && process6.stdin.isTTY && this.#isDiscardingStdin) {
      stdin_discarder_default.stop();
      this.#isDiscardingStdin = false;
    }
    return this;
  }
  succeed(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.success, text });
  }
  fail(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.error, text });
  }
  warn(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.warning, text });
  }
  info(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.info, text });
  }
  stopAndPersist(options = {}) {
    if (this.#isSilent) {
      return this;
    }
    const prefixText = options.prefixText ?? this.#prefixText;
    const fullPrefixText = this.#getFullPrefixText(prefixText, " ");
    const symbolText = options.symbol ?? " ";
    const text = options.text ?? this.text;
    const separatorText = symbolText ? " " : "";
    const fullText = typeof text === "string" ? separatorText + text : "";
    const suffixText = options.suffixText ?? this.#suffixText;
    const fullSuffixText = this.#getFullSuffixText(suffixText, " ");
    const textToWrite = fullPrefixText + symbolText + fullText + fullSuffixText + `
`;
    this.stop();
    this.#stream.write(textToWrite);
    return this;
  }
}
function ora(options) {
  return new Ora(options);
}

// src/ui/spinner.ts
class Spinner {
  spinner = null;
  start(message) {
    this.spinner = ora({
      text: message,
      color: "blue",
      spinner: "dots"
    }).start();
  }
  succeed(message) {
    if (this.spinner) {
      this.spinner.succeed(message);
      this.spinner = null;
    }
  }
  fail(message) {
    if (this.spinner) {
      this.spinner.fail(message);
      this.spinner = null;
    }
  }
  stop() {
    if (this.spinner) {
      this.spinner.stop();
      this.spinner = null;
    }
  }
}
function createSpinner() {
  return new Spinner;
}

export { StitchHandler, createSpinner };

//# debugId=B93C375DDE7DB22E64756E2164756E21
