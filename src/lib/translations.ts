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
  side: {
    english: "left",
    arabic: "right",
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
    arabic: "إدارة وتتبع جميع النباتات في مخزون الرويال غاردن.",
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
    arabic: "الشركة غير موجودة",
  },
  notes: {
    english: "Notes",
    arabic: "ملاحظات",
  },
  enterNotesAboutCompany: {
    english: "Enter notes about this company...",
    arabic: "أدخل ملاحظات حول هذه الشركة...",
  },
  saveNotes: {
    english: "Save Notes",
    arabic: "حفظ الملاحظات",
  },
  notesSavedSuccessfully: {
    english: "Notes saved successfully!",
    arabic: "تم حفظ الملاحظات بنجاح!",
  },

  // Documents Page
  upload: {
    english: "Upload",
    arabic: "رفع",
  },
  newFolder: {
    english: "New Folder",
    arabic: "مجلد جديد",
  },
  refresh: {
    english: "Refresh",
    arabic: "تحديث",
  },
  searchFiles: {
    english: "Search files...",
    arabic: "البحث عن الملفات...",
  },
  gridView: {
    english: "Grid View",
    arabic: "عرض شبكي",
  },
  listView: {
    english: "List View",
    arabic: "عرض القائمة",
  },
  createNewFolder: {
    english: "Create New Folder",
    arabic: "إنشاء مجلد جديد",
  },
  folderName: {
    english: "Folder name",
    arabic: "اسم المجلد",
  },
  cancel: {
    english: "Cancel",
    arabic: "إلغاء",
  },
  create: {
    english: "Create",
    arabic: "إنشاء",
  },
  noFilesOrFolders: {
    english: "No files or folders found",
    arabic: "لم يتم العثور على ملفات أو مجلدات",
  },
  tryDifferentSearch: {
    english: "Try a different search term",
    arabic: "جرب مصطلح بحث مختلف",
  },
  confirmDelete: {
    english: "Are you sure you want to delete",
    arabic: "هل أنت متأكد أنك تريد حذف",
  },
  failedToLoadFiles: {
    english: "Failed to load files. Please try again later.",
    arabic: "فشل تحميل الملفات. الرجاء المحاولة مرة أخرى لاحقًا.",
  },
  failedToUploadFile: {
    english: "Failed to upload file. Please try again.",
    arabic: "فشل في رفع الملف. يرجى المحاولة مرة أخرى.",
  },
  failedToDeleteFile: {
    english: "Failed to delete file. Please try again.",
    arabic: "فشل في حذف الملف. يرجى المحاولة مرة أخرى.",
  },
  failedToDownloadFile: {
    english: "Failed to download file. Please try again.",
    arabic: "فشل في تنزيل الملف. يرجى المحاولة مرة أخرى.",
  },
  failedToCreateFolder: {
    english: "Failed to create folder. Please try again.",
    arabic: "فشل في إنشاء المجلد. يرجى المحاولة مرة أخرى.",
  },
};
