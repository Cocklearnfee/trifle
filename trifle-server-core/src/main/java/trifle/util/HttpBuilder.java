package trifle.util;

import java.util.LinkedHashMap;

/**
 * 请求构造
 * Created by Stark on 2016/9/11.
 */
public class HttpBuilder {

	private LinkedHashMap<String, String> headers = new LinkedHashMap<>();
	private String serverUrl;

	public HttpBuilder(String url) {
		this.serverUrl = url;
	}

	public HttpBuilder header(String key, String value) {
		headers.put(key, value);
		return this;
	}

}
