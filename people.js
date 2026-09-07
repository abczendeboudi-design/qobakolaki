/*
========================================================
  شجره‌نامه قباکلکی
  people.js
========================================================
*/

const people = {

  /* =====================================================
     نسل مشترک غلامحسین
  ===================================================== */

  "gholamhossein": {
    name: "غلامحسین",
    gender: "مرد",

    father: "",
    mother: "",

    spouse: [],

    children: [
      "ahmad",
      "ali"
    ],

    job: "",
    education: "",

    family: "خاندان احمد و علی"
  },


  /* =====================================================
     خاندان احمد
  ===================================================== */

  "ahmad": {
    name: "احمد",
    gender: "مرد",

    father: "gholamhossein",
    mother: "",

    spouse: ["shirin"],

    children: [
      "farideh",
      "fajr",
      "gholamhossein-ahmad",
      "feiz",
      "pedram"
    ],

    job: "معلم",
    education: "",

    family: "خاندان احمد"
  },


  "shirin": {
    name: "شیرین",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["ahmad"],

    children: [
      "farideh",
      "fajr",
      "gholamhossein-ahmad",
      "feiz",
      "pedram"
    ],

    job: "خانه دار",
    education: "",

    family: "خاندان احمد"
  },


  /* فریده و صادق */

  "farideh": {
    name: "فریده",
    gender: "زن",

    father: "ahmad",
    mother: "shirin",

    spouse: ["sadegh"],

    children: [
      "kamelya"
    ],

    job: "کارمند",
    education: "دکترای شیلات",

    family: "خاندان احمد"
  },


  "sadegh": {
    name: "صادق",
    gender: "مرد",

    father: "ali",
    mother: "mahin",

    spouse: ["farideh"],

    children: [
      "kamelya"
    ],

    job: "کارمند",
    education: "",

    family: "خاندان علی"
  },


  "kamelya": {
    name: "کاملیا",
    gender: "زن",

    father: "sadegh",
    mother: "farideh",

    spouse: [],

    children: [],

    job: "دانش آموز",
    education: "",

    family: "خاندان احمد و علی"
  },


  /* فجر و فاطمه */

  "fajr": {
    name: "فجر",
    gender: "مرد",

    father: "ahmad",
    mother: "shirin",

    spouse: ["fatemeh-fajr"],

    children: [
      "baran"
    ],

    job: "کارمند",
    education: "فوق لیسانس برق",

    family: "خاندان احمد"
  },


  "fatemeh-fajr": {
    name: "فاطمه",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["fajr"],

    children: [
      "baran"
    ],

    job: "",
    education: "",

    family: "خاندان احمد"
  },


  "baran": {
    name: "باران",
    gender: "زن",

    father: "fajr",
    mother: "fatemeh-fajr",

    spouse: [],

    children: [],

    job: "دانش آموز",
    education: "",

    family: "خاندان احمد"
  },


  /* غلامحسین و سمیه عبدالکریم */

  "gholamhossein-ahmad": {
    name: "غلامحسین",
    gender: "مرد",

    father: "ahmad",
    mother: "shirin",

    spouse: ["somayeh-abdolkarim"],

    children: [
      "liana"
    ],

    job: "کارمند",
    education: "",

    family: "خاندان احمد"
  },


  "somayeh-abdolkarim": {
    name: "سمیه عبدالکریم",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["gholamhossein-ahmad"],

    children: [
      "liana"
    ],

    job: "کارمند",
    education: "فوق لیسانس شیلات",

    family: "خاندان احمد"
  },


  "liana": {
    name: "لیانا",
    gender: "زن",

    father: "gholamhossein-ahmad",
    mother: "somayeh-abdolkarim",

    spouse: [],

    children: [],

    job: "دانش آموز",
    education: "",

    family: "خاندان احمد"
  },


  /* فیض و سمیه اسپرغم */

  "feiz": {
    name: "فیض",
    gender: "مرد",

    father: "ahmad",
    mother: "shirin",

    spouse: ["somayeh-espargham"],

    children: [],

    job: "معلم",
    education: "فوق لیسانس ادبیات",

    family: "خاندان احمد"
  },


  "somayeh-espargham": {
    name: "سمیه اسپرغم",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["feiz"],

    children: [],

    job: "معلم",
    education: "",

    family: "خاندان احمد"
  },


  /* پدرام */

  "pedram": {
    name: "پدرام",
    gender: "مرد",

    father: "ahmad",
    mother: "shirin",

    spouse: [],

    children: [],

    job: "",
    education: "",

    family: "خاندان احمد"
  },


  /* =====================================================
     خاندان علی
  ===================================================== */

  "ali": {
    name: "علی",
    gender: "مرد",

    father: "gholamhossein",
    mother: "",

    spouse: ["mahin"],

    children: [
      "sadegh",
      "sedigheh",
      "samad",
      "kheyri",
      "fatemeh-ali",
      "maryam-ali"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "mahin": {
    name: "مهین",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["ali"],

    children: [
      "sadegh",
      "sedigheh",
      "samad",
      "kheyri",
      "fatemeh-ali",
      "maryam-ali"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  /* صدیقه و منصور */

  "sedigheh": {
    name: "صدیقه",
    gender: "زن",

    father: "ali",
    mother: "mahin",

    spouse: ["mansour"],

    children: [
      "mohammad-ali",
      "zhaleh",
      "yekta"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "mansour": {
    name: "منصور",
    gender: "مرد",

    father: "",
    mother: "",

    spouse: ["sedigheh"],

    children: [
      "mohammad-ali",
      "zhaleh",
      "yekta"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "mohammad-ali": {
    name: "محمد علی",
    gender: "مرد",

    father: "mansour",
    mother: "sedigheh",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "zhaleh": {
    name: "ژاله",
    gender: "زن",

    father: "mansour",
    mother: "sedigheh",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "yekta": {
    name: "یکتا",
    gender: "زن",

    father: "mansour",
    mother: "sedigheh",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  /* صمد و زهرا */

  "samad": {
    name: "صمد",
    gender: "مرد",

    father: "ali",
    mother: "mahin",

    spouse: ["zahra-samad"],

    children: [
      "niloufar",
      "melika"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "zahra-samad": {
    name: "زهرا",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["samad"],

    children: [
      "niloufar",
      "melika"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "niloufar": {
    name: "نیلوفر",
    gender: "زن",

    father: "samad",
    mother: "zahra-samad",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "melika": {
    name: "ملیکا",
    gender: "زن",

    father: "samad",
    mother: "zahra-samad",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  /* خیری و وحید */

  "kheyri": {
    name: "خیری",
    gender: "زن",

    father: "ali",
    mother: "mahin",

    spouse: ["vahid"],

    children: [
      "armina"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "vahid": {
    name: "وحید",
    gender: "مرد",

    father: "",
    mother: "",

    spouse: ["kheyri"],

    children: [
      "armina"
    ],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  "armina": {
    name: "ارمینا",
    gender: "زن",

    father: "vahid",
    mother: "kheyri",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  /* فاطمه */

  "fatemeh-ali": {
    name: "فاطمه",
    gender: "زن",

    father: "ali",
    mother: "mahin",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  /* مریم */

  "maryam-ali": {
    name: "مریم",
    gender: "زن",

    father: "ali",
    mother: "mahin",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان علی"
  },


  /* =====================================================
     خاندان محمد عبدالرشید
  ===================================================== */

  "mohammad-abdolrashid": {
    name: "محمد عبدالرشید",
    gender: "مرد",

    father: "",
    mother: "",

    spouse: ["esmat"],

    children: [
      "ebrahim",
      "rashid",
      "elham"
    ],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  },


  "esmat": {
    name: "عصمت",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["mohammad-abdolrashid"],

    children: [
      "ebrahim",
      "rashid",
      "elham"
    ],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  },


  /* ابراهیم و سارا */

  "ebrahim": {
    name: "ابراهیم",
    gender: "مرد",

    father: "mohammad-abdolrashid",
    mother: "esmat",

    spouse: ["sara"],

    children: [],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  },


  "sara": {
    name: "سارا",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["ebrahim"],

    children: [],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  },


  /* رشید و زهرا */

  "rashid": {
    name: "رشید",
    gender: "مرد",

    father: "mohammad-abdolrashid",
    mother: "esmat",

    spouse: ["zahra-rashid"],

    children: [
      "helena"
    ],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  },


  "zahra-rashid": {
    name: "زهرا",
    gender: "زن",

    father: "",
    mother: "",

    spouse: ["rashid"],

    children: [
      "helena"
    ],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  },


  "helena": {
    name: "هلنا",
    gender: "زن",

    father: "rashid",
    mother: "zahra-rashid",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  },


  /* الهام */

  "elham": {
    name: "الهام",
    gender: "زن",

    father: "mohammad-abdolrashid",
    mother: "esmat",

    spouse: [],
    children: [],

    job: "",
    education: "",

    family: "خاندان محمد عبدالرشید"
  }

};


/*
========================================================
  اطلاعات سه خاندان
========================================================
*/

const families = {

  "ahmad": {
    id: "ahmad",
    name: "خاندان احمد",
    mainPerson: "ahmad",
    parent: "gholamhossein"
  },

  "ali": {
    id: "ali",
    name: "خاندان علی",
    mainPerson: "ali",
    parent: "gholamhossein"
  },

  "mohammad-abdolrashid": {
    id: "mohammad-abdolrashid",
    name: "خاندان محمد عبدالرشید",
    mainPerson: "mohammad-abdolrashid",
    parent: null
  }

};


/*
========================================================
  توابع کمکی
========================================================
*/

function getPerson(id) {
  return people[id] || null;
}


function getPersonName(id) {

  const person = getPerson(id);

  return person
    ? person.name
    : "نام ثبت نشده";

}


function getSpouse(id) {

  const person = getPerson(id);

  if (!person || !person.spouse) {
    return null;
  }

  if (Array.isArray(person.spouse)) {
    return person.spouse.length
      ? person.spouse[0]
      : null;
  }

  return person.spouse;
}


function getChildren(id) {

  const person = getPerson(id);

  if (!person || !Array.isArray(person.children)) {
    return [];
  }

  return person.children;
}


function personExists(id) {
  return !!people[id];
    }
