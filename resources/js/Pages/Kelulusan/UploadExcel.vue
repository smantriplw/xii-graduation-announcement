<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import ActionMessage from '@/Components/ActionMessage.vue';

const form = useForm({
	file: null,
});
const fileInput = ref(null);

const uploadFile = () => {
	form.post('/api/siswa');
}
</script>

<template>
	<FormSection @submitted="uploadFile">
		<template #title>
			Upload Excel File
		</template>
		<template #description>
			Silahkan upload file excel data kelulusan siswa disini.
			Pastikan format tabelnya sudah sesuai ya!
		</template>

		<template #form>
			<div class="col-span-6 sm:col-span-4">
				<input
					type="file"
					id="file_excel"
					ref="photoInput"
					name="file_excel"
				/>
			</div>
		</template>

		<template #actions>
			<ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Uploaded.
            </ActionMessage>

			<PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
				Upload
			</PrimaryButton>
			<SecondaryButton :disabled="form.processing" class="ml-2">
				Reset
			</SecondaryButton>
		</template>
	</FormSection>
</template>