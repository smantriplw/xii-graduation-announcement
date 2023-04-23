<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import UploadExcel from '@/Pages/Kelulusan/UploadExcel.vue';
import Settings from '@/Pages/Kelulusan/Settings.vue';
</script>

<template>
	<AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard Kelulusan
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div>
                    <UploadExcel />
                    <SectionBorder />
                </div>
                <div>
                    <Settings />
                    <SectionBorder />
                </div>
            </div>
        </div>
    </AppLayout>
</template>