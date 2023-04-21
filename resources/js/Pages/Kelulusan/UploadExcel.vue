<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import ActionMessage from '@/Components/ActionMessage.vue';

const fileInput = ref(null);
const form = useForm({
	file: null,
});

const uploadFile = () => {
	if (!fileInput.value.files.length) {
		form.setError('file', 'Mohon pilih salah satu file excel dari komputer Anda');
		return;
	}

	form.file = fileInput.value.files[0];
	form.post('/api/siswa');
}

const resetForm = () => {
	fileInput.value.value = '';
	form.reset();
	form.clearErrors();
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
					ref="fileInput"
					name="file_excel"
				/>

				<InputError :message="form.errors.file" class="mt-2" />
				<progress v-if="form.progress" :value="form.progress.percentage" max="100">
				  {{ form.progress.percentage }}%
				</progress>
			</div>
		</template>

		<template #actions>
			<ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Uploaded.
            </ActionMessage>

			<PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
				Upload
			</PrimaryButton>
			<SecondaryButton :disabled="form.processing" @click="resetForm" class="ml-2">
				Reset
			</SecondaryButton>
		</template>
	</FormSection>
</template>