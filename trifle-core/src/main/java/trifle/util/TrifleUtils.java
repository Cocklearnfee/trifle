package trifle.util;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * 零散工具方法
 * Created by Stark on 2016/9/12.
 */
public class TrifleUtils {

	/**
	 * 清理值为 null 的项
	 *
	 * @param map map
	 * @param <V> map 值类型
	 * @return 清理后的 map，不返回 null，最多返回空 map。
	 */
	public static <V> Map<String, V> cleanMap(Map<String, V> map) {
		if (map == null || map.isEmpty()) {
			return new HashMap<>();
		}

		Map<String, V> result = new HashMap<>(map.size());
		Set<Map.Entry<String, V>> entries = map.entrySet();

		entries.stream().filter(entry -> entry.getValue() != null).forEach(entry ->
				result.put(entry.getKey(), entry.getValue())
		);

		return result;
	}
}
