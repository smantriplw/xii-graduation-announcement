<script setup>
import { useForm, usePage } from '@inertiajs/vue3';
import SectionTitle from '@/Components/SectionTitle.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import ActionMessage from '@/Components/ActionMessage.vue';
import Checkbox from '@/Components/Checkbox.vue';

const parentProps = defineProps({
	form: Object,
});

const form = useForm({
	name: '',
	activated: false,
	closed: false,
	openedAt: null,
	description: '',
});
const page = usePage();

const submitForm = () => {
	if (!form.openedAt) {
		form.setError('openedAt', 'Tanggal harus diisi ya!');
	} else if (form.name?.length < 4) {
		form.setError('name', 'Jumlah karakter nama harus lebih dari 4 karakter');
	} else if (form.description?.length > 20) {
		form.setError('description', 'Deskripsi harus terdiri atas minimal 10 karakter dan lebih');
	}

	form.post(route('dashboard.kelulusan.settings'), {
		onSuccess: () => {
			parentProps.form = form;
		},
	});
}
</script>

<template>
	 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
	 	<SectionTitle>
	 		<template #title>
	 			Name
	 		</template>
	 		<template #description>
	 			Mohon masukan nama setting pada kolom disebelah kanan ini
	 		</template>
	 	</SectionTitle>
	 	<TextInput
	 		type="text"
	 		id="setting_name"
	 		name="setting_name"
	 		v-model="form.name"
	 	/>
	 	<InputError :message="$page.props.errors?.name" />
	 </div>

	 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
	 	<SectionTitle>
	 		<template #title>
	 			Description
	 		</template>
	 		<template #description>
	 			Berikan deskripsi setting Anda disini
	 		</template>
	 	</SectionTitle>

	 	<TextInput
	 		type="text"
	 		id="setting_desc"
	 		name="setting_desc"
	 		v-model="form.description"
	 	/>

	 	<InputError :message="$page.props.errors?.description" />
	 </div>

	 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
	 	<SectionTitle>
	 		<template #title>
	 			Closed
	 		</template>
	 		<template #description>
	 			Apakah Anda ingin menutup pengumuman?
	 		</template>
	 	</SectionTitle>

	 	<Checkbox
	 		:checked="form.closed"
	 		v-model="form.closed"
	 		@click="form.closed = !form.closed"
	 	/>
	 </div>

	 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
	 	<SectionTitle>
	 		<template #title>
	 			Activate
	 		</template>
	 		<template #description>
	 			Apakah Anda ingin mengaktifkan pengaturan ini?
	 		</template>
	 	</SectionTitle>

	 	<Checkbox
	 		:checked="form.activated"
	 		v-model="form.activated"
	 		@click="form.activated = !form.activated"
	 	/>
	 </div>

	 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
	 	<SectionTitle>
	 		<template #title>
	 			Tanggal
	 		</template>
	 		<template #description>
	 			Tanggal berapa Anda ingin pengumuman dapat diakses?
	 		</template>
	 	</SectionTitle>
	 	<TextInput
	 		type="date"
	 		id="setting_date"
	 		name="setting_date"
	 		v-model="form.openedAt"
	 	/>
	 	<InputError :message="$page.props.errors?.openedAt" />
	 </div>
	 <ActionMessage :on="form.recentlySuccessful">
		{{ $page.props.jetstream.flash.settings }}
	 </ActionMessage>
	 <PrimaryButton class="mt-4 { 'opacity-25': form.processing }" @click="submitForm" :disabled="form.processing">
	 	Create
	 </PrimaryButton>
</template>