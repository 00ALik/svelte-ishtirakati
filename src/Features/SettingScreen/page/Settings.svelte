<script lang="ts">
  const userName = "اسماء زهير";
</script>

<div class="min-h-screen" dir="rtl">
  <!-- هيدر متدرّج مثل التطبيق -->
  <div class="relative h-40 w-fullpt-6">
    <div class="absolute inset-x-0 -bottom-10 flex justify-center">
      <div
        class="flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-md"
      >
        <svg
          viewBox="0 0 24 24"
          class="h-10 w-10 text-sky-900"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
          <path d="M4 20a8 8 0 0 1 16 0" />
        </svg>
      </div>
    </div>
  </div>

  <!-- محتوى الصفحة -->
  <div class=" pt-14 pb-8 space-y-6">
    <!-- اسم المستخدم -->
    <div class="text-center text-base font-semibold text-slate-800">
      {userName}
    </div>

    <!-- كارت تغيير الحساب -->
    <button
      class="flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm"
    >
      <div class="flex items-center gap-2">
        <!-- آيقونة مستخدم صغيرة -->
        <div
          class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-sky-900"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
            <path d="M4 20a8 8 0 0 1 16 0" />
          </svg>
        </div>
        <span>تغيير الحساب</span>
      </div>

      <span class="text-xl text-slate-700">&lt;</span>
    </button>

    <!-- كارت مزوّد الخدمة + زر تسجيل الدخول -->
    <div
      class="rounded-2xl bg-white p-4 text-sm text-slate-800 shadow-sm leading-relaxed"
    >
      <p class="mb-4">
        <span class="font-semibold text-sky-900">"هل أنت مزود خدمة؟"</span>
        <span>
          سجِّل الدخول الآن للوصول إلى لوحة التحكم الخاصة بك، ومتابعة تفاصيل
          اشتراكاتك، بكل سهولة واحترافية."
        </span>
      </p>

      <button
        class="mt-2 w-full rounded-full bg-[#16465b] py-2.5 text-sm font-semibold text-white"
      >
        تسجيل الدخول
      </button>
    </div>
  </div>
</div>
