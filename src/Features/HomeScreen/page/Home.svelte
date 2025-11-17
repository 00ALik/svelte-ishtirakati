<script lang="ts">
  import { Cog, Wifi, Router } from "lucide-svelte";
  import type { Subscription, Invoice } from "../data/subscriptions";
  import {
    initialSubscriptions,
    pendingSubscriptionData,
    lastInvoices as lastInvoicesData,
  } from "../data/subscriptions";
  import { push } from "svelte-spa-router";

  function getIcon(type: string) {
    if (type.includes("مولد")) return Cog;
    if (type.includes("المولد")) return Cog;
    if (type.includes("إنترنت")) return Wifi;
    return Router;
  }

  // الاشتراكات الحالية
  let subscriptions: Subscription[] = [...initialSubscriptions];

  // اشتراك معلّق بانتظار القبول
  let pendingSubscription: Subscription | null = pendingSubscriptionData;

  // آخر الفواتير
  const lastInvoices: Invoice[] = lastInvoicesData;

  function acceptPending() {
    if (!pendingSubscription) return;
    // نضيف الاشتراك لقائمة الاشتراكات العادية
    subscriptions = [pendingSubscription, ...subscriptions];
    // نحذف حالة الانتظار
    pendingSubscription = null;
  }

  function rejectPending() {
    pendingSubscription = null;
  }
</script>

<main
  dir="rtl"
  class="min-h-screen bg-[#F4F6F9] flex justify-center text-slate-900"
>
  <div class="w-full max-w-sm flex flex-col pb-24">
    <!-- الهيدر -->
    <header class="px-4 pt-6 pb-4 flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <p class="text-xs text-slate-500">مرحباً بك معنا</p>
        <p class="text-sm font-semibold text-slate-800">أسماء زهير</p>
      </div>
    </header>

    <!-- عنوان القسم -->
    <section class="mt-2 space-y-3">
      <h2 class="text-base font-semibold text-slate-900">اشتراكـاتي</h2>

      <!-- ✅ كارت "تمت إضافتك إلى مزود الخدمة" -->
      {#if pendingSubscription}
        <article
          class="bg-white rounded-2xl shadow-sm border border-yellow-300 px-4 py-3 mb-2 space-y-3"
        >
          <p class="text-[13px] text-slate-700 leading-relaxed">
            تمت إضافتك إلى مزود الخدمة
            <span class="font-semibold text-slate-900">
              ({pendingSubscription.type}
              {pendingSubscription.provider})
            </span>
          </p>

          <div class="flex gap-2 text-xs font-semibold">
            <button
              on:click={acceptPending}
              class="flex-1 rounded-full bg-yellow-500 text-white py-2"
            >
              قبول الإضافة
            </button>
            <button
              on:click={rejectPending}
              class="flex-1 rounded-full border border-yellow-500 text-yellow-600 bg-yellow-50 py-2"
            >
              رفض الإضافة
            </button>
          </div>

          <!-- تفاصيل الاشتراك المعلّق (داخل إطار أصفر فاتح) -->
          <div
            class="mt-3 bg-[#FFFDF5] rounded-2xl border border-yellow-200 px-4 py-3 flex flex-col gap-3"
          >
            <div class="flex items-start gap-3">
              <div
                class="mt-1 w-10 h-10 rounded-xl flex items-center justify-center border bg-yellow-50 border-yellow-200"
              >
                <svelte:component
                  this={getIcon(pendingSubscription.type)}
                  size={20}
                  class="text-yellow-700"
                />
              </div>

              <div class="flex-1 space-y-1 text-xs">
                <div class="flex justify-between">
                  <span class="text-slate-500">نوع الاشتراك</span>
                  <span class="font-semibold text-slate-800">
                    {pendingSubscription.type}
                  </span>
                </div>

                <div class="flex justify-between">
                  <span class="text-slate-500">نوع الخدمة</span>
                  <span class="font-semibold text-indigo-700">
                    {pendingSubscription.serviceType}
                  </span>
                </div>

                <div class="flex justify-between">
                  <span class="text-slate-500">عدد الاشتراكات</span>
                  <span class="font-semibold text-slate-900">
                    {pendingSubscription.count ?? 0}
                  </span>
                </div>

                <div class="flex justify-between">
                  <span class="text-slate-500">رقم البورد</span>
                  <span class="font-semibold text-slate-900">
                    {pendingSubscription.boardNo ?? "-"}
                  </span>
                </div>

                <div class="flex justify-between">
                  <span class="text-slate-500">سعر الاشتراك</span>
                  <span class="font-semibold text-slate-900">
                    {pendingSubscription.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      {/if}

      <!-- باقي الاشتراكات (العادية) -->
      {#each subscriptions as sub}
        <article
          class="bg-white rounded-2xl shadow-sm border border-slate-100 px-4 py-3 flex flex-col gap-3"
        >
          <div class="flex items-start gap-3">
            <div
              class="mt-1 w-10 h-10 rounded-xl flex items-center justify-center border bg-yellow-50 border-yellow-200"
            >
              <svelte:component
                this={getIcon(sub.type)}
                size={20}
                class="text-yellow-700"
              />
            </div>

            <div class="flex-1 space-y-1 text-xs">
              <div class="flex justify-between">
                <span class="text-slate-500">نوع الاشتراك</span>
                <span class="font-semibold text-slate-800">{sub.type}</span>
              </div>

              <div class="flex justify-between">
                <span class="text-slate-500">نوع الخدمة</span>
                <span class="font-semibold text-indigo-700">
                  {sub.serviceType}
                </span>
              </div>

              <div class="flex justify-between">
                <span class="text-slate-500">مزود الخدمة</span>
                <span class="font-semibold text-slate-800">{sub.provider}</span>
              </div>

              <div class="flex justify-between">
                <span class="text-slate-500">سعر الاشتراك</span>
                <span class="font-semibold text-slate-900">{sub.price}</span>
              </div>
            </div>
          </div>

          <button
            class="self-start text-[13px] font-semibold text-sky-800"
            on:click={() => push(`/details/${sub.id}`)}
          >
            عرض التفاصيل
          </button>
        </article>
      {/each}
    </section>

    <!-- آخر الفواتير -->
    <section class=" mt-5 space-y-3">
      <h2 class="text-base font-semibold text-slate-900">آخر الفواتير</h2>

      {#each lastInvoices as inv}
        <article
          class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          <div
            class="{inv.statusColor} text-white text-xs font-semibold px-4 py-2 flex items-center justify-between"
          >
            <span>{inv.status}</span>
            <span class="text-[11px] opacity-90">اشترك الآن</span>
          </div>

          <div class="px-4 py-3 space-y-2 text-xs">
            <div class="flex items-start gap-3">
              <div
                class="mt-1 w-10 h-10 rounded-xl flex items-center justify-center border bg-yellow-50 border-yellow-200"
              >
                <svelte:component
                  this={getIcon(inv.type)}
                  size={20}
                  class="text-yellow-700"
                />
              </div>

              <div class="flex-1 space-y-1">
                <div class="flex justify-between">
                  <span class="text-slate-500">نوع الاشتراك</span>
                  <span class="font-semibold text-slate-800">{inv.type}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">سعر الاشتراك</span>
                  <span class="font-semibold text-slate-900">{inv.price}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">عدد الاشتراكات</span>
                  <span class="font-semibold text-slate-900">{inv.count}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">رقم البورد</span>
                  <span class="font-semibold text-slate-900">{inv.boardNo}</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">رقم الجورة</span>
                  <span class="font-semibold text-slate-900">{inv.lineNo}</span>
                </div>
              </div>
            </div>

            {#if inv.primary}
              <button
                class="mt-3 w-full rounded-full bg-slate-900 text-white py-2 text-xs font-semibold"
              >
                اشترك الآن
              </button>
            {/if}
          </div>
        </article>
      {/each}
    </section>
  </div>
</main>
