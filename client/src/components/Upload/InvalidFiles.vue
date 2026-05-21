<script setup lang='ts'>
    defineProps<{
        invalidFiles: string[]
        quantityFiles: number
    }>()
</script>


<template>
  <!-- Componente Lista de Arquivos Inválidos (HTML Puro + Tailwind CSS) -->
   <div class="w-full h-fit mt-8" >
        <div class="w-full flex flex-col gap-3">
            <div class="flex items-center gap-2 mb-3.5 text-xs font-bold uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert w-4 h-4 text-red-400" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16">
                    </line>
                </svg>
                <span class="text-red-400">ARQUIVOS INVÁLIDOS OU ILEGÍVEIS</span>
                <span class="text-[12px] font-normal tracking-normal text-[#8d90a0] ml-auto font-mono">({{ quantityFiles }} itens)</span>
            </div>

            <div v-for="file in invalidFiles" 
                class="flex items-center justify-between bg-[#191621] border border-red-500/20 rounded-lg p-2.5 sm:p-3 text-xs gap-3 transition-colors hover:brightness-110">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="p-1.5 rounded bg-red-500/10 text-red-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x w-4 h-4" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                        </svg>
                    </div>
                    <div class="min-w-0">
                        <p class="font-mono text-[14px] text-[#fca5a5] truncate">{{ file }}</p>
                        <p class="text-[12px] text-[#8d90a0] uppercase tracking-wide truncate">ARQUIVO CORROMPIDO OU FORMATO NÃO SUPORTADO</p>
                    </div>
                </div>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#ffb4ab]/10 text-red-400 border border-red-500/30 uppercase shrink-0">ILEGÍVEL</span>
            </div>
        </div>
    </div>
</template>


<style module>

</style>