<script lang="ts">
  type NotificationStatus = "warning" | "success" | "error";

  type Notification = {
    id: number;
    date: string;
    title: string;
    lines: string[];
    status: NotificationStatus;
    showAction?: boolean;
  };

  const notifications: Notification[] = [
    {
      id: 1,
      date: "2025-4-5",
      title: "تنبيه",
      status: "warning",
      lines: [
        "تم انتهاء اشتراك الانترنت مع جبار حسين سعر الاشتراك ٣٥ د.ع"
      ],
      showAction: true
    },
    {
      id: 2,
      date: "2025-4-5",
      title: "تم دفع الفاتورة بنجاح",
      status: "success",
      lines: [
        "تم تجديد اشتراك الانترنت مع علي حسين سعر الاشتراك ٣٥ د.ع"
      ]
    },
    {
      id: 3,
      date: "2025-4-5",
      title: "فشل عملية الدفع",
      status: "error",
      lines: [
        "ليس لديك مبلغ كافٍ في بطاقاتك لتجديد الاشتراك"
      ]
    }
  ];

  const statusIcon = (status: NotificationStatus) => {
    if (status === "warning") return "!";
    if (status === "success") return "✔";
    return "!";
  };

  const statusClasses = (status: NotificationStatus) => {
    if (status === "warning")
      return "text-amber-600 border-amber-400 bg-amber-50";
    if (status === "success")
      return "text-emerald-600 border-emerald-500 bg-emerald-50";
    return "text-rose-600 border-rose-400 bg-rose-50";
  };
</script>

<div class="min-h-screen bg-slate-50  py-6" dir="rtl">
  <div class="space-y-4">
    {#each notifications as n}
      <div class="rounded-2xl bg-white px-4 py-3 shadow-sm">
        <!-- التاريخ + العنوان + الأيقونة -->
        <div class="mb-2 flex items-center justify-between">
          <span class="text-xs text-slate-500">{n.date}</span>

          <div class="flex items-center gap-1">
            <span class="text-sm font-semibold text-slate-800">
              {n.title}
            </span>
            <span
              class={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${statusClasses(
                n.status
              )}`}
            >
              {statusIcon(n.status)}
            </span>
          </div>
        </div>

        <!-- النصوص -->
        <div class="space-y-1 text-right text-sm leading-relaxed text-slate-700">
          {#each n.lines as line}
            <p>{line}</p>
          {/each}
        </div>

        <!-- زر تجديد الاشتراك (لأول إشعار) -->
        {#if n.showAction}
          <button
            class="mt-3 w-full rounded-full bg-[#16465b] py-2 text-sm font-semibold text-white"
          >
            تجديد الاشتراك
          </button>
        {/if}
      </div>
    {/each}
  </div>
</div>