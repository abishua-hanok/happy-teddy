const poemText = `
Ritika,

jb phone pe tera naam chmkta h,
baki duniya ka shor dhire-dhire tham sa jaata h.

tera roz ka “khaana khaya?” keh dena,
meri bikhri hui thakaan ko seedha ghr le aata hai na.

teri awaz mein jo hlka sa sukun h,
jaise andheri raat mein chaand ka pehla noor ho kahi.

main hero nahi hu, na perfect kahaani ka frame,
par tum saath ho toh khud pe thoda yaqeen aa jaata h same.

hum lade bhi h, chup rehna bhi seekha h,
phir bhi har faasle ne humein aur paas hi khicha h.

tera wapas aana, bin kuch kahe,
mere liye pyaar ka sabse seedha matlab rahe.

kabhi kabhi lagta hai main kam reh jaata hu,
phr teri muskaan dekhta hoon aur sab bhool jaata hu.

din agar bhaari ho, ya raat thodi slow,
mera kandha tumhara hai, bas itna jaan lo.

Ritika, tum sirf meri aadat nahi,
tum woh jagah ho jahan main khud se bhaagta nahi.

aur agar kabhi lafz kam pad jaayein,
ya main khamosh sa ho jaaun kahin,

to ye rhyme yaad rakhna,
main hamesha tumhara tha, hoon,
aur rahunga…
`;

let i = 0;
let started = false;

function startPoem() {
  const poemBox = document.getElementById("poemBox");
  const poem = document.getElementById("typedPoem");
  const music = document.getElementById("bgMusic");

  poemBox.style.display = "block";
  music.volume = 0.4;
  music.play();

  if (started) return;
  started = true;

  function type() {
    if (i < poemText.length) {
      poem.innerHTML += poemText.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}
