<script setup lang='ts'>
  import { formatBRL } from '../../../utils/useFormatBRL'

  defineProps<{
    totalValue: number
    totalFiles: number
  }>()
</script>


<template>
  <!-- SumNFE Total Value -->
  <div class="w-full h-fit mt-8">
    <div class="bg-[#0b1326] border border-[#1e293b] rounded-xl p-6 w-full">
      <div class="flex flex-col gap-3">

        <span class="text-[11px] font-bold tracking-widest text-[#8d90a0] uppercase font-display flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse">
          </span>
          VALOR TOTAL
        </span>

        <!-- Total Value -->
        <h2 class="text-4xl font-extrabold tracking-tight text-white font-sans">
          <span class="text-[#2563eb]">R$</span> {{ formatBRL(totalValue) }}
        </h2>

        <!-- Quantity of Files -->
         
        <div class="flex items-center gap-1.5 pt-1 border-t border-white/5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-4 h-4 text-emerald-500 opacity-80" aria-hidden="true">
            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
          <span class="text-sm text-[#8d90a0]">
            Notas processadas:
            <strong class="text-white font-semibold font-sans">
              {{ totalFiles }}
            </strong>
          </span>
        </div>
      </div>
    </div>
  </div>
  
</template>
