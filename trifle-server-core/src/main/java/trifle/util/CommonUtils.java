package trifle.util;

import trifle.bean.Constants;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * 零散工具方法
 * Created by Stark on 2016/9/12.
 */
public class CommonUtils {

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

	/**
	 * 检查指定的字符串是否为空。
	 * <ul>
	 * <li>isEmpty(null) = true</li>
	 * <li>isEmpty("") = true</li>
	 * <li>isEmpty("   ") = true</li>
	 * <li>isEmpty("abc") = false</li>
	 * </ul>
	 *
	 * @param value 待检查的字符串
	 * @return true/false 字符串是否为空
	 */
	public static boolean isEmpty(String value) {
		int strLen;
		if (value == null || (strLen = value.length()) == 0) {
			return true;
		}
		for (int i = 0; i < strLen; i++) {
			if ((!Character.isWhitespace(value.charAt(i)))) {
				return false;
			}
		}
		return true;
	}

	/**
	 * 检查对象是否为数字型字符串,包含负数开头的。
	 */
	public static boolean isNumeric(Object obj) {
		if (obj == null) {
			return false;
		}
		char[] chars = obj.toString().toCharArray();
		int length = chars.length;
		if (length < 1)
			return false;

		int i = 0;
		if (length > 1 && chars[0] == '-')
			i = 1;

		for (; i < length; i++) {
			if (!Character.isDigit(chars[i])) {
				return false;
			}
		}
		return true;
	}

	/**
	 * 传入字符串是否为空
	 *
	 * @param values 传入字符串
	 * @return true/false
	 */
	public static boolean notEmpty(String... values) {
		boolean result = true;
		if (values == null || values.length == 0) {
			result = false;
		} else {
			for (String value : values) {
				result &= !isEmpty(value);
			}
		}
		return result;
	}

	/**
	 * 字节码转换为字符
	 *
	 * @param data   字节码
	 * @param offset 字节偏移
	 * @param length 转换长度
	 * @return 转换后的长度
	 */
	public static String bytesToString(byte[] data, int offset, int length) {
		if (data == null) {
			return null;
		} else {
			try {
				return new String(data, offset, length, Constants.CHARSET_UTF8);
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}

	/**
	 * 字符串转
	 *
	 * @param data
	 */
	public static byte[] stringToBytes(String data) {
		if (data == null) {
			return null;
		} else {
			try {
				return data.getBytes(Constants.CHARSET_UTF8);
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
}
