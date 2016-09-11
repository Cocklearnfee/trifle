package trifle.bean;

import trifle.util.FileUtils;

import java.io.*;

/**
 * 文件元数据
 * Created by Stark on 2016/9/12.
 */
public class FileItem implements Serializable {

	private String fileName;
	private String mimeType;
	private byte[] content;
	private File file;


	/**
	 * 基于文件构造
	 *
	 * @param file 本地文件
	 */
	public FileItem(File file) {
		this.file = file;
	}

	/**
	 * 基于文件绝对路径构造
	 *
	 * @param filePath 文件的绝对路径
	 */
	public FileItem(String filePath) {
		this(new File(filePath));
	}

	/**
	 * 基于文件名和字节流构造
	 *
	 * @param fileName 文件名
	 * @param content  文件字节流
	 */
	public FileItem(String fileName, byte[] content) {
		this.fileName = fileName;
		this.content = content;
	}

	/**
	 * 基于文件名、文件字节流、文件类型的构造
	 *
	 * @param fileName 文件名
	 * @param content  文件字节流
	 * @param mimeType 文件类型
	 */
	public FileItem(String fileName, byte[] content, String mimeType) {
		this(fileName, content);
		this.mimeType = mimeType;
	}

	/**
	 * 获取文件名称
	 *
	 * @return 文件名称
	 */
	public String getFileName() {
		if (this.fileName == null && this.file != null && this.file.exists()) {
			this.fileName = file.getName();
		}
		return this.fileName;
	}

	/**
	 * 获取文件类型
	 *
	 * @return 文件类型
	 * @throws IOException 文件读取异常
	 */
	public String getMimeType() throws IOException {
		if (this.mimeType == null) {
			this.mimeType = FileUtils.getMimeType(getContent());
		}
		return this.mimeType;
	}

	/**
	 * 获取文件字节流
	 *
	 * @return 文件字节流
	 * @throws IOException 文件读取异常
	 */
	public byte[] getContent() throws IOException {
		if (content == null) {
			content = FileUtils.getBytesContent(file);
		}
		return content;
	}

}
