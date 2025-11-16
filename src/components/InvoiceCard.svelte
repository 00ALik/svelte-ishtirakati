<script lang="ts">
  import { Cog } from "lucide-svelte";

  export let type = "مولدة";
  export let status = "مدفوع";
  export let price = "150 د.ع";
  export let count = 10;
  export let boardNo = 6;
  export let lineNo = 421;
</script>

<article
  dir="rtl"
  class="bg-white rounded-2xl border border-[#E5EDF5] shadow-sm px-6 pt-3 pb-4 inline-block"
>
  <!-- الصف العلوي: مدفوع + نوع الاشتراك + الأيقونة -->
  <div class="flex items-start justify-between mb-2">
    <!-- شارة الحالة -->
    <span
      class="inline-flex px-4 py-1 rounded-full bg-[#2F8F3F] text-white text-xs font-semibold"
    >
      {status}
    </span>

    <!-- نوع الاشتراك + الأيقونة -->
    <div class="flex items-center gap-2">
      <div class="flex flex-col text-right">
        <span class="text-[11px] text-slate-500">نوع الاشتراك</span>
        <span class="text-[13px] font-bold text-[#01507A]">
          {type}
        </span>
      </div>

      <div
        class="w-9 h-9 rounded-full bg-[#FFF8DB] border border-[#F3D17B] flex items-center justify-center"
      >
        <Cog size={18} class="text-[#F3B015]" />
      </div>
    </div>
  </div>

  <!-- الصف السفلي: القيم -->
  <div class="mt-1 grid grid-cols-4 gap-3 text-[11px] text-slate-600">
    <div class="text-right">
      <span class="block text-slate-500 mb-0.5">رقم البورد</span>
      <span class="font-semibold text-[#01507A]">{boardNo}</span>
    </div>

    <div class="text-right">
      <span class="block text-slate-500 mb-0.5">رقم الجورة</span>
      <span class="font-semibold text-[#01507A]">{lineNo}</span>
    </div>

    <div class="text-right">
      <span class="block text-slate-500 mb-0.5">عدد الاشتراكات</span>
      <span class="font-semibold text-[#01507A]">{count}</span>
    </div>

    <div class="text-right">
      <span class="block text-slate-500 mb-0.5">سعر الاشتراك</span>
      <span class="font-semibold text-[#01507A]">{price}</span>
    </div>
  </div>
</article>