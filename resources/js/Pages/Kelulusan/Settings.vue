<script setup>
import { ref, computed } from 'vue';
import { useForm, usePage, router } from '@inertiajs/vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionMessage from '@/Components/ActionMessage.vue';
import Checkbox from '@/Components/Checkbox.vue';
import DialogModal from '@/Components/DialogModal.vue';
import SettingsCreate from '@/Pages/Kelulusan/Settings.create.vue';
import Dropdown from '@/Components/Dropdown.vue';

const page = usePage();
const {props: $props} = page;

const form = useForm({
	description: page.props.kelulusanDesc,
	closed: page.props.kelulusanClosed,
	openedAt: page.props.kelulusanOpenAt,
	name: page.props.kelulusanSettingName,
	id: page.props.kelulusanSettingId,
	activated: true,
});

const labelSetting = computed(() => {
	const setting = $props.settings.find(s => s.id === form.id);
	if (!setting) {
		console.log(setting, $props);
	}

	form.description = setting.description;
	form.closed = Boolean(setting.closed);
	form.activated = Boolean(setting.activated);
	form.openedAt = setting.openedAt;
	form.name = setting.name;

	return `Setting ID (selected: ${form.id})`;
});

const deleteRule = () => {
	router.delete(route('dashboard.kelulusan.delete_setting', {
		id: form.id,
	}, {
		onFinish: () => form.reset(),
	}));
}

const submitForm = () => {
	form.post(route('dashboard.kelulusan.update_setting', {
		id: form.id,
	}, {
		preserveState: true,
		onSuccess: reloadPage
	}));
}

const reloadPage = () => {
	form.reset();
}

let displayModal = ref(false);
</script>

<template>
	<FormSection @submit.prevent="submitForm">
		<template #title>
			Pengaturan
		</template>
		<template #description>
			Anda dapat mengkonfigurasi waktu, status, dan deskripsi dari kelulusan.
			Semisalnya, Anda ingin pengguna hanya dapat melihat status kelulusan pada saat kapan.
		</template>
		<template #form>
			<div class="col-span-6 sm:col-span-4">
				<InputLabel for="name" :value="labelSetting" />
				<select v-model="form.id" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
					<option v-for="setting in $page.props.settings" :value="setting.id" ref="settings">
						[ID: {{ setting.id }}] {{ setting.name }}
					</option>
				</select>
			</div>

			<div class="col-span-6 sm:col-span-4">
				<InputLabel for="name" value="Setting name" />
				<TextInput
					id="name"
					v-model="form.name"
					type="text"
					class="mt-1 block w-full"
					autocomplete="name"
				/>
				<InputError :message="$page.props.errors?.name" class="mt-2" />
			</div>
			<div class="col-span-6 sm:col-span-4">
				<InputLabel for="description" value="Description" />
				<TextInput
					id="description"
					v-model="form.description"
					type="text"
					class="mt-1 block w-full"
					autocomplete="description"
				/>
				<InputError :message="$page.props.errors?.description" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<InputLabel for="closed" value="Closed status" />
				<Checkbox
					:value="form.closed ? 'closed' : 'open'"
					:checked="form.closed"
					@click="form.closed = !form.closed"
					v-model="form.closed"
				/>
				<InputError :message="$page.props.errors?.closed" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<InputLabel for="closed" value="Activate status" />
				<Checkbox
					:value="form.activated ? 'Off' : 'On'"
					:checked="form.activated"
					@click="form.activated = !form.activated"
					v-model="form.activated"
				/>
				<InputError :message="$page.props.errors?.activated" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<InputLabel for="openAt" value="Open Date" />
				<TextInput
					id="openAt"
					type="date"
					name="openAt"
					v-model="form.openedAt"
				/>
				<InputError :message="$page.props.errors?.openedAt" class="mt-2" />
			</div>
		</template>

		<template #actions>
			<ActionMessage :on="form.recentlySuccessful" class="mr-3">
				{{ $page.props.jetstream.flash.settings }}
		    </ActionMessage>

			<PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
				Save
			</PrimaryButton>
			<SecondaryButton @click="displayModal = true" class="ml-2" :disabled="form.processing">
				New +
			</SecondaryButton>
			<SecondaryButton @click="reloadPage" class="ml-2">
				Refresh
			</SecondaryButton>
			<PrimaryButton type="button" :disabled="form.processing" class="bg-red-600 ml-2 hover:bg-red-500" @click="deleteRule">
				Delete
			</PrimaryButton>
		</template>
	</FormSection>


	<DialogModal :show="displayModal" @close="displayModal = false">
		<template #title>
			Buat pengaturan baru
		</template>

		<template #content>
			<SettingsCreate :form="form" />
		</template>

		<template #footer>
			<SecondaryButton @click="displayModal = false">
               Close
            </SecondaryButton>
		</template>
	</DialogModal>
</template>