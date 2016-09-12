package trifle.bean;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;

/**
 * 通用实体超类
 * Created by Stark on 2016/9/12.
 */
public abstract class GenericEntity<Key extends Serializable> implements Serializable, Cloneable {

	/** 主键 */
	private Key id;

	/** 自定义属性 */
	private Map<String, Object> properties;

	/**
	 * 获取主键
	 *
	 * @return 主键
	 */
	public Key getId() {
		return id;
	}

	/**
	 * 设置主键
	 *
	 * @param id 主键
	 */
	public void setId(Key id) {
		this.id = id;
	}

	/**
	 * 设置额外属性
	 *
	 * @param attr  属性键
	 * @param value 属性值
	 * @param <T>   值类型
	 */
	public <T> void setProperty(String attr, T value) {
		if (properties == null) {
			properties = new LinkedHashMap<>();
		}
		properties.put(attr, value);
	}

	public <T> T getProperty(String attr) {
		if (properties == null) {
			return null;
		}
		return (T) properties.get(attr);
	}

	/**
	 * 设置额外属性，会覆盖之前设置的单个值
	 *
	 * @param properties 额外属性
	 */
	public void setProperties(Map<String, Object> properties) {
		this.properties = properties;
	}

	/**
	 * 获取额外属性
	 *
	 * @return 额外属性列表
	 */
	public Map<String, Object> getProperties() {
		return properties;
	}

	@Override
	public int hashCode() {
		if (getId() == null) {
			return 0;
		}

		return getId().hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == null) {
			return false;
		}
		return this.hashCode() == obj.hashCode();
	}

	/**
	 * 创建一个 uuid
	 */
	public static String randomUuid() {
		return UUID.randomUUID().toString();
	}

	@Override
	public Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}
