type TranslationType = {
  [key: string]: {
    english: string;
    arabic: string;
  };
};

export const translations: TranslationType = {
  // Navigation
  home: {
    english: "Home",
    arabic: "الرئيسية",
  },
  bills: {
    english: "Bills",
    arabic: "الفواتير",
  },
  documents: {
    english: "Documents",
    arabic: "المستندات",
  },
  profile: {
    english: "Profile",
    arabic: "الملف الشخصي",
  },
  login: {
    english: "Login",
    arabic: "تسجيل الدخول",
  },
  side:{
    english: "left",
    arabic: "right"
  },

  // Home Page
  royalGardenManagement: {
    english: "Royal Garden Management",
    arabic: "إدارة الرويال غاردن",
  },
  royalGarden: {
    english: "Royal Garden",
    arabic: "الرويال غاردن",
  },
  managePlants: {
    english: "Manage and track all plants in the royal garden inventory.",
    arabic: "إدارة وتتبع جميع النباتات في مخزون الرويال غاردن."
  },
  viewNotes: {
    english: "View Notes",
    arabic: "عرض الملاحظات",
  },

  // Profile Page
  userProfile: {
    english: "User Profile",
    arabic: "الملف الشخصي للمستخدم",
  },

  // Login Form
  emailAddress: {
    english: "Email Address",
    arabic: "البريد الإلكتروني",
  },
  password: {
    english: "Password",
    arabic: "كلمة المرور",
  },
  rememberMe: {
    english: "Remember me",
    arabic: "تذكرني",
  },
  forgotPassword: {
    english: "Forgot password?",
    arabic: "نسيت كلمة المرور؟",
  },
  signIn: {
    english: "Sign In",
    arabic: "تسجيل الدخول",
  },

  // Theme Toggle
  light: {
    english: "Light",
    arabic: "فاتح",
  },
  dark: {
    english: "Dark",
    arabic: "داكن",
  },
  system: {
    english: "System",
    arabic: "النظام",
  },
  toggleTheme: {
    english: "Toggle theme",
    arabic: "تبديل السمة",
  },
  
  // Company Notes Page
  companyNotFound: {
    english: "Company not found",
    arabic: "الشركة غير موجودة"
  },
  notes: {
    english: "Notes",
    arabic: "ملاحظات"
  },
  enterNotesAboutCompany: {
    english: "Enter notes about this company...",
    arabic: "أدخل ملاحظات حول هذه الشركة..."
  },
  saveNotes: {
    english: "Save Notes",
    arabic: "حفظ الملاحظات"
  },
  notesSavedSuccessfully: {
    english: "Notes saved successfully!",
    arabic: "تم حفظ الملاحظات بنجاح!"
  }
};