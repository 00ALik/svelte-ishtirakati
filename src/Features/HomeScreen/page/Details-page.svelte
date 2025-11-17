<script lang="ts">
  const subscription = {
    provider: "محمد عبد الكريم",
    type: "مولدة",
    serviceType: "ذهبي",
    price: "150 د.ع",
    amps: "10 امبير",
    jawzah: "120",
    board: "128",
    note: "عدد امبيرات الطالبها 8 امبيرات خط ذهبي",
  };
</script>

<div class="bg-white rounded-2xl p-5 space-y-6 shadow-sm" dir="rtl">
  <!-- العنوان العلوي -->
  <div class="flex justify-between">
    <div class="text-right">
      <span class="text-sm text-slate-500">نوع الاشتراك</span>
      <div class="text-lg font-semibold text-sky-900">{subscription.type}</div>
    </div>

    <div class="text-right">
      <span class="text-sm text-slate-500">مزود الخدمة</span>
      <div class="text-lg font-semibold text-sky-900">
        {subscription.provider}
      </div>
    </div>
  </div>

  <!-- الحقول -->
  <div class="space-y-4">
    {#each [{ right: "نوع الخدمة", left: subscription.serviceType }, { right: "سعر الاشتراك", left: subscription.price }, { right: "عدد الامبيرات", left: subscription.amps }, { right: "رقم الجوزة", left: subscription.jawzah }, { right: "رقم البورد", left: subscription.board }] as row}
      <div class="grid grid-cols-[1fr_auto_1fr] items-center">
        <span class="text-sm text-slate-600 text-right">{row.right}</span>

        <span class="mx-auto block h-[1.5px] w-28 bg-slate-300 rounded-full"
        ></span>

        <span class="text-sm font-semibold text-sky-900 text-left"
          >{row.left}</span
        >
      </div>
    {/each}
  </div>
  <!-- الملاحظة -->
  <div class="rounded-2xl bg-slate-50 p-4 text-center text-sm text-slate-700">
    {subscription.note}
  </div>
</div>
