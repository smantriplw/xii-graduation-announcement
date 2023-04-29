<?php
namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\KelulusanSettingsRequest;
use App\Http\Requests\UpdateKelulusanSettingsRequest;
use App\Models\Settings;
use Illuminate\Support\Str;

class KelulusanSettingsController extends Controller
{
	public function create(KelulusanSettingsRequest $request)
	{
		$rows = $request->all();
		if ($rows['activated'] == true)
		{
			Settings::where('activated', true)->update([
				'activated' => false,
			]);
		}
		$setting = Settings::create($rows);

		return redirect()->back()->with('flash', [
			'settings' => 'Setting created',
			'data' => $setting,
		]);
	}

	public function update(UpdateKelulusanSettingsRequest $request, int $id)
	{
		$rows = $request->all();
		$setting = Settings::find($id);

		if (!isset($setting)) {
			return redirect()->back()->withErrors([
				'settings' => 'Requested setting couldn\'t found',
			]);
		}

		$current_active_setting = Settings::where('activated', true);
		if ($current_active_setting->exists() && $rows['activated'] == true) {
			$current_active_setting->update([
				'activated' => false,
			]);
		} else if (!$current_active_setting->exists()) {
			$rows['activated'] = true;
		}

		$setting->description = $rows['description'];
		$setting->openedAt = $rows['openedAt'];
		$setting->name = $rows['name'];
		$setting->closed = $rows['closed'];
		$setting->activated = $rows['activated'];

		$setting->save();


		return redirect()->back()->with('flash', [
			'settings' => 'Applied',
		]);
	}

	public function enableSetting(int $id)
	{
		$setting = Settings::find($id);

		if (!isset($setting)) {
			return redirect()->back()->withErrors([
				'settings' => 'Requested setting couldn\'t found',
			]);
		}

		if ($setting->activated) {
			return redirect()->back()->withErrors([
				'settings' => 'This setting is already activated',
			]);
		}

		$active_setting = Settings::where('activated', true);
		if ($active_setting->exists()) {
			$active_setting->update([
				'activated' => false,
			]);
		}

		$setting->activated = true;
		$setting->save();

		return redirect()->back()->with('flash', [
			'settings' => urlencode($setting->name) . ' setting activated',
		]);
	}

	public function destroy(int $id)
	{
		$setting = Settings::find($id);
		if (!isset($setting)) {
			return redirect()->back()->withErrors([
				'settings' => 'Requested setting couldn\'t found',
			]);
		}

		if ($setting->activated && $setting->delete()) {
			$setting = Settings::where('activated', false);
			if (!$setting->exists()) {
				Settings::create([
					'name' => 'Default setting',
					'closed' => config('app.kelulusanClosed'),
					'description' => config('app.kelulusanDesc'),
					'openedAt' => config('app.kelulusanOpenedAt'),
					'activated' => true,
				]);
			} else {
				$setting->update([
					'activated' => true,
				]);
			}
			return redirect()->back()->with('flash', [
				'settings' => 'Deleted',
			]);
		} else {
			return redirect()->back()->withErrors([
				'settings' => 'Couldn\'t delete this setting'
			]);
		}
	}

	public static function get_active_settings(): array
	{
		$active_setting = Settings::where('activated', true);
		$count = Settings::count();

		if (!$active_setting->exists() && $count > 0)
		{
			$active_setting = Settings::inRandomOrder()->first();
			$active_setting->update([
				'activated' => true,
			]);
		} else if (!$active_setting->exists() && $count < 1) {
			$active_setting = Settings::create([
				'name' => 'Default setting ' . Str::random(4),
				'closed' => config('app.kelulusanClosed'),
				'description' => config('app.kelulusanDesc'),
				'openedAt' => config('app.kelulusanOpenedAt'),
				'activated' => true,
			]);
		} else {
			$active_setting = $active_setting->first();
		}
		return [
			'kelulusanDesc' => $active_setting['description'],
			'kelulusanClosed' => boolval($active_setting['closed']),
			'kelulusanOpenAt' => $active_setting['openedAt'],
			'kelulusanSettingId' => $active_setting['id'],
			'kelulusanSettingName' => $active_setting['name'],
			'settings' => Settings::all()->toArray(),
		];
	}
}