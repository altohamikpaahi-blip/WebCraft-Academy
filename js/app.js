document.addEventListener('DOMContentLoaded', () => {
    console.log("WebCraft Academy Loaded Successfully.");
});
const courseData = {
    easy: {
        title: "المستوى السهل: أساسيات HTML",
        lessons: [
            { id: 1, title: "الدرس 1: مقدمة عن الويب وكيف يعمل الإنترنت" },
            { id: 2, title: "الدرس 2: هيكلة الصفحة والعلامات الأساسية Tags" },
            { id: 3, title: "الدرس 3: إضافة الصور، الروابط، والجداول" }
        ]
    },
    medium: {
        title: "المستوى العادي: تنسيق المواقع CSS",
        lessons: [
            { id: 1, title: "الدرس 1: مدخل إلى تنسيقات CSS والألوان" },
            { id: 2, title: "الدرس 2: توزيع العناصر باحترافية Flexbox" },
            { id: 3, title: "الدرس 3: التصميم المتجاوب للشاشات المختلفة" }
        ]
    },
    hard: {
        title: "المستوى الصعب: جافاسكريبت المتقدم",
        lessons: [
            { id: 1, title: "الدرس 1: المتغيرات وأنواع البيانات في JS" },
            { id: 2, title: "الدرس 2: التفاعل مع المستند DOM Events" },
            { id: 3, title: "الدرس 3: بناء مشروع تفاعلي مصغر" }
        ]
    }
};

function loadLevel(levelKey) {
    const level = courseData[levelKey];
    const levelsContainer = document.getElementById('levelsContainer');
    const lessonsView = document.getElementById('lessons-view');
    
    if (!levelsContainer || !lessonsView) return;

    let html = `<h2 style="color:#fff; margin-bottom:15px; text-align:center;">${level.title}</h2><div class="lessons-list">`;
    
    level.lessons.forEach(lesson => {
        html += `<div class="lesson-item">
            <span>${lesson.title}</span>
            <button onclick="openLesson('${levelKey}', ${lesson.id})" style="background:linear-gradient(135deg, #6366f1, #a855f7); color:white; border:none; padding:8px 15px; border-radius:6px; cursor:pointer; font-weight:bold;">دخول الدرس</button>
        </div>`;
    });
    
    html += `</div><button onclick="goBackToLevels()" class="back-btn">العودة للمستويات</button>`;
    
    levelsContainer.style.display = 'none';
    lessonsView.style.display = 'block';
    lessonsView.innerHTML = html;
}

function goBackToLevels() {
    const levelsContainer = document.getElementById('levelsContainer');
    const lessonsView = document.getElementById('lessons-view');
    
    if (levelsContainer && lessonsView) {
        lessonsView.style.display = 'none';
        levelsContainer.style.display = 'flex';
    }
}

function openLesson(levelKey, lessonId) {
    alert(`جارٍ فتح ${levelKey} - الدرس رقم ${lessonId}`);
}
