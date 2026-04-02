import {
  onExit
} from "./chunk-tz7wnw4s.js";
import {
  theme
} from "./chunk-kbtqrkwh.js";
import {
  exports_external
} from "./chunk-c6ge431q.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-9wyra8hs.js";

// node_modules/adm-zip/util/constants.js
var require_constants = __commonJS((exports, module) => {
  module.exports = {
    LOCHDR: 30,
    LOCSIG: 67324752,
    LOCVER: 4,
    LOCFLG: 6,
    LOCHOW: 8,
    LOCTIM: 10,
    LOCCRC: 14,
    LOCSIZ: 18,
    LOCLEN: 22,
    LOCNAM: 26,
    LOCEXT: 28,
    EXTSIG: 134695760,
    EXTHDR: 16,
    EXTCRC: 4,
    EXTSIZ: 8,
    EXTLEN: 12,
    CENHDR: 46,
    CENSIG: 33639248,
    CENVEM: 4,
    CENVER: 6,
    CENFLG: 8,
    CENHOW: 10,
    CENTIM: 12,
    CENCRC: 16,
    CENSIZ: 20,
    CENLEN: 24,
    CENNAM: 28,
    CENEXT: 30,
    CENCOM: 32,
    CENDSK: 34,
    CENATT: 36,
    CENATX: 38,
    CENOFF: 42,
    ENDHDR: 22,
    ENDSIG: 101010256,
    ENDSUB: 8,
    ENDTOT: 10,
    ENDSIZ: 12,
    ENDOFF: 16,
    ENDCOM: 20,
    END64HDR: 20,
    END64SIG: 117853008,
    END64START: 4,
    END64OFF: 8,
    END64NUMDISKS: 16,
    ZIP64SIG: 101075792,
    ZIP64HDR: 56,
    ZIP64LEAD: 12,
    ZIP64SIZE: 4,
    ZIP64VEM: 12,
    ZIP64VER: 14,
    ZIP64DSK: 16,
    ZIP64DSKDIR: 20,
    ZIP64SUB: 24,
    ZIP64TOT: 32,
    ZIP64SIZB: 40,
    ZIP64OFF: 48,
    ZIP64EXTRA: 56,
    STORED: 0,
    SHRUNK: 1,
    REDUCED1: 2,
    REDUCED2: 3,
    REDUCED3: 4,
    REDUCED4: 5,
    IMPLODED: 6,
    DEFLATED: 8,
    ENHANCED_DEFLATED: 9,
    PKWARE: 10,
    BZIP2: 12,
    LZMA: 14,
    IBM_TERSE: 18,
    IBM_LZ77: 19,
    AES_ENCRYPT: 99,
    FLG_ENC: 1,
    FLG_COMP1: 2,
    FLG_COMP2: 4,
    FLG_DESC: 8,
    FLG_ENH: 16,
    FLG_PATCH: 32,
    FLG_STR: 64,
    FLG_EFS: 2048,
    FLG_MSK: 4096,
    FILE: 2,
    BUFFER: 1,
    NONE: 0,
    EF_ID: 0,
    EF_SIZE: 2,
    ID_ZIP64: 1,
    ID_AVINFO: 7,
    ID_PFS: 8,
    ID_OS2: 9,
    ID_NTFS: 10,
    ID_OPENVMS: 12,
    ID_UNIX: 13,
    ID_FORK: 14,
    ID_PATCH: 15,
    ID_X509_PKCS7: 20,
    ID_X509_CERTID_F: 21,
    ID_X509_CERTID_C: 22,
    ID_STRONGENC: 23,
    ID_RECORD_MGT: 24,
    ID_X509_PKCS7_RL: 25,
    ID_IBM1: 101,
    ID_IBM2: 102,
    ID_POSZIP: 18064,
    EF_ZIP64_OR_32: 4294967295,
    EF_ZIP64_OR_16: 65535,
    EF_ZIP64_SUNCOMP: 0,
    EF_ZIP64_SCOMP: 8,
    EF_ZIP64_RHO: 16,
    EF_ZIP64_DSN: 24
  };
});

// node_modules/adm-zip/util/errors.js
var require_errors = __commonJS((exports) => {
  var errors = {
    INVALID_LOC: "Invalid LOC header (bad signature)",
    INVALID_CEN: "Invalid CEN header (bad signature)",
    INVALID_END: "Invalid END header (bad signature)",
    DESCRIPTOR_NOT_EXIST: "No descriptor present",
    DESCRIPTOR_UNKNOWN: "Unknown descriptor format",
    DESCRIPTOR_FAULTY: "Descriptor data is malformed",
    NO_DATA: "Nothing to decompress",
    BAD_CRC: "CRC32 checksum failed {0}",
    FILE_IN_THE_WAY: "There is a file in the way: {0}",
    UNKNOWN_METHOD: "Invalid/unsupported compression method",
    AVAIL_DATA: "inflate::Available inflate data did not terminate",
    INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
    TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
    INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
    INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
    INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
    INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
    INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
    INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
    INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
    CANT_EXTRACT_FILE: "Could not extract the file",
    CANT_OVERRIDE: "Target file already exists",
    DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
    NO_ZIP: "No zip file was loaded",
    NO_ENTRY: "Entry doesn't exist",
    DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
    FILE_NOT_FOUND: 'File not found: "{0}"',
    NOT_IMPLEMENTED: "Not implemented",
    INVALID_FILENAME: "Invalid filename",
    INVALID_FORMAT: "Invalid or unsupported zip format. No END header found",
    INVALID_PASS_PARAM: "Incompatible password parameter",
    WRONG_PASSWORD: "Wrong Password",
    COMMENT_TOO_LONG: "Comment is too long",
    EXTRA_FIELD_PARSE_ERROR: "Extra field parsing error"
  };
  function E(message) {
    return function(...args) {
      if (args.length) {
        message = message.replace(/\{(\d)\}/g, (_, n) => args[n] || "");
      }
      return new Error("ADM-ZIP: " + message);
    };
  }
  for (const msg of Object.keys(errors)) {
    exports[msg] = E(errors[msg]);
  }
});

// node_modules/adm-zip/util/utils.js
var require_utils = __commonJS((exports, module) => {
  var fsystem = __require("fs");
  var pth = __require("path");
  var Constants = require_constants();
  var Errors = require_errors();
  var isWin = typeof process === "object" && process.platform === "win32";
  var is_Obj = (obj) => typeof obj === "object" && obj !== null;
  var crcTable = new Uint32Array(256).map((t, c) => {
    for (let k = 0;k < 8; k++) {
      if ((c & 1) !== 0) {
        c = 3988292384 ^ c >>> 1;
      } else {
        c >>>= 1;
      }
    }
    return c >>> 0;
  });
  function Utils(opts) {
    this.sep = pth.sep;
    this.fs = fsystem;
    if (is_Obj(opts)) {
      if (is_Obj(opts.fs) && typeof opts.fs.statSync === "function") {
        this.fs = opts.fs;
      }
    }
  }
  module.exports = Utils;
  Utils.prototype.makeDir = function(folder) {
    const self = this;
    function mkdirSync(fpath) {
      let resolvedPath = fpath.split(self.sep)[0];
      fpath.split(self.sep).forEach(function(name) {
        if (!name || name.substr(-1, 1) === ":")
          return;
        resolvedPath += self.sep + name;
        var stat;
        try {
          stat = self.fs.statSync(resolvedPath);
        } catch (e) {
          if (e.message && e.message.startsWith("ENOENT")) {
            self.fs.mkdirSync(resolvedPath);
          } else {
            throw e;
          }
        }
        if (stat && stat.isFile())
          throw Errors.FILE_IN_THE_WAY(`"${resolvedPath}"`);
      });
    }
    mkdirSync(folder);
  };
  Utils.prototype.writeFileTo = function(path2, content, overwrite, attr) {
    const self = this;
    if (self.fs.existsSync(path2)) {
      if (!overwrite)
        return false;
      var stat = self.fs.statSync(path2);
      if (stat.isDirectory()) {
        return false;
      }
    }
    var folder = pth.dirname(path2);
    if (!self.fs.existsSync(folder)) {
      self.makeDir(folder);
    }
    var fd;
    try {
      fd = self.fs.openSync(path2, "w", 438);
    } catch (e) {
      self.fs.chmodSync(path2, 438);
      fd = self.fs.openSync(path2, "w", 438);
    }
    if (fd) {
      try {
        self.fs.writeSync(fd, content, 0, content.length, 0);
      } finally {
        self.fs.closeSync(fd);
      }
    }
    self.fs.chmodSync(path2, attr || 438);
    return true;
  };
  Utils.prototype.writeFileToAsync = function(path2, content, overwrite, attr, callback) {
    if (typeof attr === "function") {
      callback = attr;
      attr = undefined;
    }
    const self = this;
    self.fs.exists(path2, function(exist) {
      if (exist && !overwrite)
        return callback(false);
      self.fs.stat(path2, function(err, stat) {
        if (exist && stat.isDirectory()) {
          return callback(false);
        }
        var folder = pth.dirname(path2);
        self.fs.exists(folder, function(exists) {
          if (!exists)
            self.makeDir(folder);
          self.fs.open(path2, "w", 438, function(err2, fd) {
            if (err2) {
              self.fs.chmod(path2, 438, function() {
                self.fs.open(path2, "w", 438, function(err3, fd2) {
                  self.fs.write(fd2, content, 0, content.length, 0, function() {
                    self.fs.close(fd2, function() {
                      self.fs.chmod(path2, attr || 438, function() {
                        callback(true);
                      });
                    });
                  });
                });
              });
            } else if (fd) {
              self.fs.write(fd, content, 0, content.length, 0, function() {
                self.fs.close(fd, function() {
                  self.fs.chmod(path2, attr || 438, function() {
                    callback(true);
                  });
                });
              });
            } else {
              self.fs.chmod(path2, attr || 438, function() {
                callback(true);
              });
            }
          });
        });
      });
    });
  };
  Utils.prototype.findFiles = function(path2) {
    const self = this;
    function findSync(dir, pattern, recursive) {
      if (typeof pattern === "boolean") {
        recursive = pattern;
        pattern = undefined;
      }
      let files = [];
      self.fs.readdirSync(dir).forEach(function(file) {
        const path3 = pth.join(dir, file);
        const stat = self.fs.statSync(path3);
        if (!pattern || pattern.test(path3)) {
          files.push(pth.normalize(path3) + (stat.isDirectory() ? self.sep : ""));
        }
        if (stat.isDirectory() && recursive)
          files = files.concat(findSync(path3, pattern, recursive));
      });
      return files;
    }
    return findSync(path2, undefined, true);
  };
  Utils.prototype.findFilesAsync = function(dir, cb) {
    const self = this;
    let results = [];
    self.fs.readdir(dir, function(err, list) {
      if (err)
        return cb(err);
      let list_length = list.length;
      if (!list_length)
        return cb(null, results);
      list.forEach(function(file) {
        file = pth.join(dir, file);
        self.fs.stat(file, function(err2, stat) {
          if (err2)
            return cb(err2);
          if (stat) {
            results.push(pth.normalize(file) + (stat.isDirectory() ? self.sep : ""));
            if (stat.isDirectory()) {
              self.findFilesAsync(file, function(err3, res) {
                if (err3)
                  return cb(err3);
                results = results.concat(res);
                if (!--list_length)
                  cb(null, results);
              });
            } else {
              if (!--list_length)
                cb(null, results);
            }
          }
        });
      });
    });
  };
  Utils.prototype.getAttributes = function() {};
  Utils.prototype.setAttributes = function() {};
  Utils.crc32update = function(crc, byte) {
    return crcTable[(crc ^ byte) & 255] ^ crc >>> 8;
  };
  Utils.crc32 = function(buf) {
    if (typeof buf === "string") {
      buf = Buffer.from(buf, "utf8");
    }
    let len = buf.length;
    let crc = ~0;
    for (let off = 0;off < len; )
      crc = Utils.crc32update(crc, buf[off++]);
    return ~crc >>> 0;
  };
  Utils.methodToString = function(method) {
    switch (method) {
      case Constants.STORED:
        return "STORED (" + method + ")";
      case Constants.DEFLATED:
        return "DEFLATED (" + method + ")";
      default:
        return "UNSUPPORTED (" + method + ")";
    }
  };
  Utils.canonical = function(path2) {
    if (!path2)
      return "";
    const safeSuffix = pth.posix.normalize("/" + path2.split("\\").join("/"));
    return pth.join(".", safeSuffix);
  };
  Utils.zipnamefix = function(path2) {
    if (!path2)
      return "";
    const safeSuffix = pth.posix.normalize("/" + path2.split("\\").join("/"));
    return pth.posix.join(".", safeSuffix);
  };
  Utils.findLast = function(arr, callback) {
    if (!Array.isArray(arr))
      throw new TypeError("arr is not array");
    const len = arr.length >>> 0;
    for (let i = len - 1;i >= 0; i--) {
      if (callback(arr[i], i, arr)) {
        return arr[i];
      }
    }
    return;
  };
  Utils.sanitize = function(prefix, name) {
    prefix = pth.resolve(pth.normalize(prefix));
    var parts = name.split("/");
    for (var i = 0, l = parts.length;i < l; i++) {
      var path2 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
      if (path2.indexOf(prefix) === 0) {
        return path2;
      }
    }
    return pth.normalize(pth.join(prefix, pth.basename(name)));
  };
  Utils.toBuffer = function toBuffer(input, encoder) {
    if (Buffer.isBuffer(input)) {
      return input;
    } else if (input instanceof Uint8Array) {
      return Buffer.from(input);
    } else {
      return typeof input === "string" ? encoder(input) : Buffer.alloc(0);
    }
  };
  Utils.readBigUInt64LE = function(buffer, index) {
    const lo = buffer.readUInt32LE(index);
    const hi = buffer.readUInt32LE(index + 4);
    return hi * 4294967296 + lo;
  };
  Utils.fromDOS2Date = function(val) {
    return new Date((val >> 25 & 127) + 1980, Math.max((val >> 21 & 15) - 1, 0), Math.max(val >> 16 & 31, 1), val >> 11 & 31, val >> 5 & 63, (val & 31) << 1);
  };
  Utils.fromDate2DOS = function(val) {
    let date = 0;
    let time = 0;
    if (val.getFullYear() > 1979) {
      date = (val.getFullYear() - 1980 & 127) << 9 | val.getMonth() + 1 << 5 | val.getDate();
      time = val.getHours() << 11 | val.getMinutes() << 5 | val.getSeconds() >> 1;
    }
    return date << 16 | time;
  };
  Utils.isWin = isWin;
  Utils.crcTable = crcTable;
});

// node_modules/adm-zip/util/fattr.js
var require_fattr = __commonJS((exports, module) => {
  var pth = __require("path");
  module.exports = function(path2, { fs: fs2 }) {
    var _path = path2 || "", _obj = newAttr(), _stat = null;
    function newAttr() {
      return {
        directory: false,
        readonly: false,
        hidden: false,
        executable: false,
        mtime: 0,
        atime: 0
      };
    }
    if (_path && fs2.existsSync(_path)) {
      _stat = fs2.statSync(_path);
      _obj.directory = _stat.isDirectory();
      _obj.mtime = _stat.mtime;
      _obj.atime = _stat.atime;
      _obj.executable = (73 & _stat.mode) !== 0;
      _obj.readonly = (128 & _stat.mode) === 0;
      _obj.hidden = pth.basename(_path)[0] === ".";
    } else {
      console.warn("Invalid path: " + _path);
    }
    return {
      get directory() {
        return _obj.directory;
      },
      get readOnly() {
        return _obj.readonly;
      },
      get hidden() {
        return _obj.hidden;
      },
      get mtime() {
        return _obj.mtime;
      },
      get atime() {
        return _obj.atime;
      },
      get executable() {
        return _obj.executable;
      },
      decodeAttributes: function() {},
      encodeAttributes: function() {},
      toJSON: function() {
        return {
          path: _path,
          isDirectory: _obj.directory,
          isReadOnly: _obj.readonly,
          isHidden: _obj.hidden,
          isExecutable: _obj.executable,
          mTime: _obj.mtime,
          aTime: _obj.atime
        };
      },
      toString: function() {
        return JSON.stringify(this.toJSON(), null, "\t");
      }
    };
  };
});

// node_modules/adm-zip/util/decoder.js
var require_decoder = __commonJS((exports, module) => {
  module.exports = {
    efs: true,
    encode: (data) => Buffer.from(data, "utf8"),
    decode: (data) => data.toString("utf8")
  };
});

// node_modules/adm-zip/util/index.js
var require_util = __commonJS((exports, module) => {
  module.exports = require_utils();
  module.exports.Constants = require_constants();
  module.exports.Errors = require_errors();
  module.exports.FileAttr = require_fattr();
  module.exports.decoder = require_decoder();
});

// node_modules/adm-zip/headers/entryHeader.js
var require_entryHeader = __commonJS((exports, module) => {
  var Utils = require_util();
  var Constants = Utils.Constants;
  module.exports = function() {
    var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
    _verMade |= Utils.isWin ? 2560 : 768;
    _flags |= Constants.FLG_EFS;
    const _localHeader = {
      extraLen: 0
    };
    const uint32 = (val) => Math.max(0, val) >>> 0;
    const uint16 = (val) => Math.max(0, val) & 65535;
    const uint8 = (val) => Math.max(0, val) & 255;
    _time = Utils.fromDate2DOS(new Date);
    return {
      get made() {
        return _verMade;
      },
      set made(val) {
        _verMade = val;
      },
      get version() {
        return _version;
      },
      set version(val) {
        _version = val;
      },
      get flags() {
        return _flags;
      },
      set flags(val) {
        _flags = val;
      },
      get flags_efs() {
        return (_flags & Constants.FLG_EFS) > 0;
      },
      set flags_efs(val) {
        if (val) {
          _flags |= Constants.FLG_EFS;
        } else {
          _flags &= ~Constants.FLG_EFS;
        }
      },
      get flags_desc() {
        return (_flags & Constants.FLG_DESC) > 0;
      },
      set flags_desc(val) {
        if (val) {
          _flags |= Constants.FLG_DESC;
        } else {
          _flags &= ~Constants.FLG_DESC;
        }
      },
      get method() {
        return _method;
      },
      set method(val) {
        switch (val) {
          case Constants.STORED:
            this.version = 10;
          case Constants.DEFLATED:
          default:
            this.version = 20;
        }
        _method = val;
      },
      get time() {
        return Utils.fromDOS2Date(this.timeval);
      },
      set time(val) {
        val = new Date(val);
        this.timeval = Utils.fromDate2DOS(val);
      },
      get timeval() {
        return _time;
      },
      set timeval(val) {
        _time = uint32(val);
      },
      get timeHighByte() {
        return uint8(_time >>> 8);
      },
      get crc() {
        return _crc;
      },
      set crc(val) {
        _crc = uint32(val);
      },
      get compressedSize() {
        return _compressedSize;
      },
      set compressedSize(val) {
        _compressedSize = uint32(val);
      },
      get size() {
        return _size;
      },
      set size(val) {
        _size = uint32(val);
      },
      get fileNameLength() {
        return _fnameLen;
      },
      set fileNameLength(val) {
        _fnameLen = val;
      },
      get extraLength() {
        return _extraLen;
      },
      set extraLength(val) {
        _extraLen = val;
      },
      get extraLocalLength() {
        return _localHeader.extraLen;
      },
      set extraLocalLength(val) {
        _localHeader.extraLen = val;
      },
      get commentLength() {
        return _comLen;
      },
      set commentLength(val) {
        _comLen = val;
      },
      get diskNumStart() {
        return _diskStart;
      },
      set diskNumStart(val) {
        _diskStart = uint32(val);
      },
      get inAttr() {
        return _inattr;
      },
      set inAttr(val) {
        _inattr = uint32(val);
      },
      get attr() {
        return _attr;
      },
      set attr(val) {
        _attr = uint32(val);
      },
      get fileAttr() {
        return (_attr || 0) >> 16 & 4095;
      },
      get offset() {
        return _offset;
      },
      set offset(val) {
        _offset = uint32(val);
      },
      get encrypted() {
        return (_flags & Constants.FLG_ENC) === Constants.FLG_ENC;
      },
      get centralHeaderSize() {
        return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
      },
      get realDataOffset() {
        return _offset + Constants.LOCHDR + _localHeader.fnameLen + _localHeader.extraLen;
      },
      get localHeader() {
        return _localHeader;
      },
      loadLocalHeaderFromBinary: function(input) {
        var data = input.slice(_offset, _offset + Constants.LOCHDR);
        if (data.readUInt32LE(0) !== Constants.LOCSIG) {
          throw Utils.Errors.INVALID_LOC();
        }
        _localHeader.version = data.readUInt16LE(Constants.LOCVER);
        _localHeader.flags = data.readUInt16LE(Constants.LOCFLG);
        _localHeader.flags_desc = (_localHeader.flags & Constants.FLG_DESC) > 0;
        _localHeader.method = data.readUInt16LE(Constants.LOCHOW);
        _localHeader.time = data.readUInt32LE(Constants.LOCTIM);
        _localHeader.crc = data.readUInt32LE(Constants.LOCCRC);
        _localHeader.compressedSize = data.readUInt32LE(Constants.LOCSIZ);
        _localHeader.size = data.readUInt32LE(Constants.LOCLEN);
        _localHeader.fnameLen = data.readUInt16LE(Constants.LOCNAM);
        _localHeader.extraLen = data.readUInt16LE(Constants.LOCEXT);
        const extraStart = _offset + Constants.LOCHDR + _localHeader.fnameLen;
        const extraEnd = extraStart + _localHeader.extraLen;
        return input.slice(extraStart, extraEnd);
      },
      loadFromBinary: function(data) {
        if (data.length !== Constants.CENHDR || data.readUInt32LE(0) !== Constants.CENSIG) {
          throw Utils.Errors.INVALID_CEN();
        }
        _verMade = data.readUInt16LE(Constants.CENVEM);
        _version = data.readUInt16LE(Constants.CENVER);
        _flags = data.readUInt16LE(Constants.CENFLG);
        _method = data.readUInt16LE(Constants.CENHOW);
        _time = data.readUInt32LE(Constants.CENTIM);
        _crc = data.readUInt32LE(Constants.CENCRC);
        _compressedSize = data.readUInt32LE(Constants.CENSIZ);
        _size = data.readUInt32LE(Constants.CENLEN);
        _fnameLen = data.readUInt16LE(Constants.CENNAM);
        _extraLen = data.readUInt16LE(Constants.CENEXT);
        _comLen = data.readUInt16LE(Constants.CENCOM);
        _diskStart = data.readUInt16LE(Constants.CENDSK);
        _inattr = data.readUInt16LE(Constants.CENATT);
        _attr = data.readUInt32LE(Constants.CENATX);
        _offset = data.readUInt32LE(Constants.CENOFF);
      },
      localHeaderToBinary: function() {
        var data = Buffer.alloc(Constants.LOCHDR);
        data.writeUInt32LE(Constants.LOCSIG, 0);
        data.writeUInt16LE(_version, Constants.LOCVER);
        data.writeUInt16LE(_flags, Constants.LOCFLG);
        data.writeUInt16LE(_method, Constants.LOCHOW);
        data.writeUInt32LE(_time, Constants.LOCTIM);
        data.writeUInt32LE(_crc, Constants.LOCCRC);
        data.writeUInt32LE(_compressedSize, Constants.LOCSIZ);
        data.writeUInt32LE(_size, Constants.LOCLEN);
        data.writeUInt16LE(_fnameLen, Constants.LOCNAM);
        data.writeUInt16LE(_localHeader.extraLen, Constants.LOCEXT);
        return data;
      },
      centralHeaderToBinary: function() {
        var data = Buffer.alloc(Constants.CENHDR + _fnameLen + _extraLen + _comLen);
        data.writeUInt32LE(Constants.CENSIG, 0);
        data.writeUInt16LE(_verMade, Constants.CENVEM);
        data.writeUInt16LE(_version, Constants.CENVER);
        data.writeUInt16LE(_flags, Constants.CENFLG);
        data.writeUInt16LE(_method, Constants.CENHOW);
        data.writeUInt32LE(_time, Constants.CENTIM);
        data.writeUInt32LE(_crc, Constants.CENCRC);
        data.writeUInt32LE(_compressedSize, Constants.CENSIZ);
        data.writeUInt32LE(_size, Constants.CENLEN);
        data.writeUInt16LE(_fnameLen, Constants.CENNAM);
        data.writeUInt16LE(_extraLen, Constants.CENEXT);
        data.writeUInt16LE(_comLen, Constants.CENCOM);
        data.writeUInt16LE(_diskStart, Constants.CENDSK);
        data.writeUInt16LE(_inattr, Constants.CENATT);
        data.writeUInt32LE(_attr, Constants.CENATX);
        data.writeUInt32LE(_offset, Constants.CENOFF);
        return data;
      },
      toJSON: function() {
        const bytes = function(nr) {
          return nr + " bytes";
        };
        return {
          made: _verMade,
          version: _version,
          flags: _flags,
          method: Utils.methodToString(_method),
          time: this.time,
          crc: "0x" + _crc.toString(16).toUpperCase(),
          compressedSize: bytes(_compressedSize),
          size: bytes(_size),
          fileNameLength: bytes(_fnameLen),
          extraLength: bytes(_extraLen),
          commentLength: bytes(_comLen),
          diskNumStart: _diskStart,
          inAttr: _inattr,
          attr: _attr,
          offset: _offset,
          centralHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
        };
      },
      toString: function() {
        return JSON.stringify(this.toJSON(), null, "\t");
      }
    };
  };
});

// node_modules/adm-zip/headers/mainHeader.js
var require_mainHeader = __commonJS((exports, module) => {
  var Utils = require_util();
  var Constants = Utils.Constants;
  module.exports = function() {
    var _volumeEntries = 0, _totalEntries = 0, _size = 0, _offset = 0, _commentLength = 0;
    return {
      get diskEntries() {
        return _volumeEntries;
      },
      set diskEntries(val) {
        _volumeEntries = _totalEntries = val;
      },
      get totalEntries() {
        return _totalEntries;
      },
      set totalEntries(val) {
        _totalEntries = _volumeEntries = val;
      },
      get size() {
        return _size;
      },
      set size(val) {
        _size = val;
      },
      get offset() {
        return _offset;
      },
      set offset(val) {
        _offset = val;
      },
      get commentLength() {
        return _commentLength;
      },
      set commentLength(val) {
        _commentLength = val;
      },
      get mainHeaderSize() {
        return Constants.ENDHDR + _commentLength;
      },
      loadFromBinary: function(data) {
        if ((data.length !== Constants.ENDHDR || data.readUInt32LE(0) !== Constants.ENDSIG) && (data.length < Constants.ZIP64HDR || data.readUInt32LE(0) !== Constants.ZIP64SIG)) {
          throw Utils.Errors.INVALID_END();
        }
        if (data.readUInt32LE(0) === Constants.ENDSIG) {
          _volumeEntries = data.readUInt16LE(Constants.ENDSUB);
          _totalEntries = data.readUInt16LE(Constants.ENDTOT);
          _size = data.readUInt32LE(Constants.ENDSIZ);
          _offset = data.readUInt32LE(Constants.ENDOFF);
          _commentLength = data.readUInt16LE(Constants.ENDCOM);
        } else {
          _volumeEntries = Utils.readBigUInt64LE(data, Constants.ZIP64SUB);
          _totalEntries = Utils.readBigUInt64LE(data, Constants.ZIP64TOT);
          _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZE);
          _offset = Utils.readBigUInt64LE(data, Constants.ZIP64OFF);
          _commentLength = 0;
        }
      },
      toBinary: function() {
        var b = Buffer.alloc(Constants.ENDHDR + _commentLength);
        b.writeUInt32LE(Constants.ENDSIG, 0);
        b.writeUInt32LE(0, 4);
        b.writeUInt16LE(_volumeEntries, Constants.ENDSUB);
        b.writeUInt16LE(_totalEntries, Constants.ENDTOT);
        b.writeUInt32LE(_size, Constants.ENDSIZ);
        b.writeUInt32LE(_offset, Constants.ENDOFF);
        b.writeUInt16LE(_commentLength, Constants.ENDCOM);
        b.fill(" ", Constants.ENDHDR);
        return b;
      },
      toJSON: function() {
        const offset = function(nr, len) {
          let offs = nr.toString(16).toUpperCase();
          while (offs.length < len)
            offs = "0" + offs;
          return "0x" + offs;
        };
        return {
          diskEntries: _volumeEntries,
          totalEntries: _totalEntries,
          size: _size + " bytes",
          offset: offset(_offset, 4),
          commentLength: _commentLength
        };
      },
      toString: function() {
        return JSON.stringify(this.toJSON(), null, "\t");
      }
    };
  };
});

// node_modules/adm-zip/headers/index.js
var require_headers = __commonJS((exports) => {
  exports.EntryHeader = require_entryHeader();
  exports.MainHeader = require_mainHeader();
});

// node_modules/adm-zip/methods/deflater.js
var require_deflater = __commonJS((exports, module) => {
  module.exports = function(inbuf) {
    var zlib = __require("zlib");
    var opts = { chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024 };
    return {
      deflate: function() {
        return zlib.deflateRawSync(inbuf, opts);
      },
      deflateAsync: function(callback) {
        var tmp = zlib.createDeflateRaw(opts), parts = [], total = 0;
        tmp.on("data", function(data) {
          parts.push(data);
          total += data.length;
        });
        tmp.on("end", function() {
          var buf = Buffer.alloc(total), written = 0;
          buf.fill(0);
          for (var i = 0;i < parts.length; i++) {
            var part = parts[i];
            part.copy(buf, written);
            written += part.length;
          }
          callback && callback(buf);
        });
        tmp.end(inbuf);
      }
    };
  };
});

// node_modules/adm-zip/methods/inflater.js
var require_inflater = __commonJS((exports, module) => {
  var version = +(process.versions ? process.versions.node : "").split(".")[0] || 0;
  module.exports = function(inbuf, expectedLength) {
    var zlib = __require("zlib");
    const option = version >= 15 && expectedLength > 0 ? { maxOutputLength: expectedLength } : {};
    return {
      inflate: function() {
        return zlib.inflateRawSync(inbuf, option);
      },
      inflateAsync: function(callback) {
        var tmp = zlib.createInflateRaw(option), parts = [], total = 0;
        tmp.on("data", function(data) {
          parts.push(data);
          total += data.length;
        });
        tmp.on("end", function() {
          var buf = Buffer.alloc(total), written = 0;
          buf.fill(0);
          for (var i = 0;i < parts.length; i++) {
            var part = parts[i];
            part.copy(buf, written);
            written += part.length;
          }
          callback && callback(buf);
        });
        tmp.end(inbuf);
      }
    };
  };
});

// node_modules/adm-zip/methods/zipcrypto.js
var require_zipcrypto = __commonJS((exports, module) => {
  var { randomFillSync } = __require("crypto");
  var Errors = require_errors();
  var crctable = new Uint32Array(256).map((t, crc) => {
    for (let j = 0;j < 8; j++) {
      if ((crc & 1) !== 0) {
        crc = crc >>> 1 ^ 3988292384;
      } else {
        crc >>>= 1;
      }
    }
    return crc >>> 0;
  });
  var uMul = (a, b) => Math.imul(a, b) >>> 0;
  var crc32update = (pCrc32, bval) => {
    return crctable[(pCrc32 ^ bval) & 255] ^ pCrc32 >>> 8;
  };
  var genSalt = () => {
    if (typeof randomFillSync === "function") {
      return randomFillSync(Buffer.alloc(12));
    } else {
      return genSalt.node();
    }
  };
  genSalt.node = () => {
    const salt = Buffer.alloc(12);
    const len = salt.length;
    for (let i = 0;i < len; i++)
      salt[i] = Math.random() * 256 & 255;
    return salt;
  };
  var config = {
    genSalt
  };
  function Initkeys(pw) {
    const pass = Buffer.isBuffer(pw) ? pw : Buffer.from(pw);
    this.keys = new Uint32Array([305419896, 591751049, 878082192]);
    for (let i = 0;i < pass.length; i++) {
      this.updateKeys(pass[i]);
    }
  }
  Initkeys.prototype.updateKeys = function(byteValue) {
    const keys = this.keys;
    keys[0] = crc32update(keys[0], byteValue);
    keys[1] += keys[0] & 255;
    keys[1] = uMul(keys[1], 134775813) + 1;
    keys[2] = crc32update(keys[2], keys[1] >>> 24);
    return byteValue;
  };
  Initkeys.prototype.next = function() {
    const k = (this.keys[2] | 2) >>> 0;
    return uMul(k, k ^ 1) >> 8 & 255;
  };
  function make_decrypter(pwd) {
    const keys = new Initkeys(pwd);
    return function(data) {
      const result = Buffer.alloc(data.length);
      let pos = 0;
      for (let c of data) {
        result[pos++] = keys.updateKeys(c ^ keys.next());
      }
      return result;
    };
  }
  function make_encrypter(pwd) {
    const keys = new Initkeys(pwd);
    return function(data, result, pos = 0) {
      if (!result)
        result = Buffer.alloc(data.length);
      for (let c of data) {
        const k = keys.next();
        result[pos++] = c ^ k;
        keys.updateKeys(c);
      }
      return result;
    };
  }
  function decrypt(data, header, pwd) {
    if (!data || !Buffer.isBuffer(data) || data.length < 12) {
      return Buffer.alloc(0);
    }
    const decrypter = make_decrypter(pwd);
    const salt = decrypter(data.slice(0, 12));
    const verifyByte = (header.flags & 8) === 8 ? header.timeHighByte : header.crc >>> 24;
    if (salt[11] !== verifyByte) {
      throw Errors.WRONG_PASSWORD();
    }
    return decrypter(data.slice(12));
  }
  function _salter(data) {
    if (Buffer.isBuffer(data) && data.length >= 12) {
      config.genSalt = function() {
        return data.slice(0, 12);
      };
    } else if (data === "node") {
      config.genSalt = genSalt.node;
    } else {
      config.genSalt = genSalt;
    }
  }
  function encrypt(data, header, pwd, oldlike = false) {
    if (data == null)
      data = Buffer.alloc(0);
    if (!Buffer.isBuffer(data))
      data = Buffer.from(data.toString());
    const encrypter = make_encrypter(pwd);
    const salt = config.genSalt();
    salt[11] = header.crc >>> 24 & 255;
    if (oldlike)
      salt[10] = header.crc >>> 16 & 255;
    const result = Buffer.alloc(data.length + 12);
    encrypter(salt, result);
    return encrypter(data, result, 12);
  }
  module.exports = { decrypt, encrypt, _salter };
});

// node_modules/adm-zip/methods/index.js
var require_methods = __commonJS((exports) => {
  exports.Deflater = require_deflater();
  exports.Inflater = require_inflater();
  exports.ZipCrypto = require_zipcrypto();
});

// node_modules/adm-zip/zipEntry.js
var require_zipEntry = __commonJS((exports, module) => {
  var Utils = require_util();
  var Headers = require_headers();
  var Constants = Utils.Constants;
  var Methods = require_methods();
  module.exports = function(options, input) {
    var _centralHeader = new Headers.EntryHeader, _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0), _extralocal = Buffer.alloc(0), _efs = true;
    const opts = options;
    const decoder = typeof opts.decoder === "object" ? opts.decoder : Utils.decoder;
    _efs = decoder.hasOwnProperty("efs") ? decoder.efs : false;
    function getCompressedDataFromZip() {
      if (!input || !(input instanceof Uint8Array)) {
        return Buffer.alloc(0);
      }
      _extralocal = _centralHeader.loadLocalHeaderFromBinary(input);
      return input.slice(_centralHeader.realDataOffset, _centralHeader.realDataOffset + _centralHeader.compressedSize);
    }
    function crc32OK(data) {
      if (!_centralHeader.flags_desc && !_centralHeader.localHeader.flags_desc) {
        if (Utils.crc32(data) !== _centralHeader.localHeader.crc) {
          return false;
        }
      } else {
        const descriptor = {};
        const dataEndOffset = _centralHeader.realDataOffset + _centralHeader.compressedSize;
        if (input.readUInt32LE(dataEndOffset) == Constants.LOCSIG || input.readUInt32LE(dataEndOffset) == Constants.CENSIG) {
          throw Utils.Errors.DESCRIPTOR_NOT_EXIST();
        }
        if (input.readUInt32LE(dataEndOffset) == Constants.EXTSIG) {
          descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC);
          descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ);
          descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN);
        } else if (input.readUInt16LE(dataEndOffset + 12) === 19280) {
          descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC - 4);
          descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ - 4);
          descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN - 4);
        } else {
          throw Utils.Errors.DESCRIPTOR_UNKNOWN();
        }
        if (descriptor.compressedSize !== _centralHeader.compressedSize || descriptor.size !== _centralHeader.size || descriptor.crc !== _centralHeader.crc) {
          throw Utils.Errors.DESCRIPTOR_FAULTY();
        }
        if (Utils.crc32(data) !== descriptor.crc) {
          return false;
        }
      }
      return true;
    }
    function decompress(async, callback, pass) {
      if (typeof callback === "undefined" && typeof async === "string") {
        pass = async;
        async = undefined;
      }
      if (_isDirectory) {
        if (async && callback) {
          callback(Buffer.alloc(0), Utils.Errors.DIRECTORY_CONTENT_ERROR());
        }
        return Buffer.alloc(0);
      }
      var compressedData = getCompressedDataFromZip();
      if (compressedData.length === 0) {
        if (async && callback)
          callback(compressedData);
        return compressedData;
      }
      if (_centralHeader.encrypted) {
        if (typeof pass !== "string" && !Buffer.isBuffer(pass)) {
          throw Utils.Errors.INVALID_PASS_PARAM();
        }
        compressedData = Methods.ZipCrypto.decrypt(compressedData, _centralHeader, pass);
      }
      var data = Buffer.alloc(_centralHeader.size);
      switch (_centralHeader.method) {
        case Utils.Constants.STORED:
          compressedData.copy(data);
          if (!crc32OK(data)) {
            if (async && callback)
              callback(data, Utils.Errors.BAD_CRC());
            throw Utils.Errors.BAD_CRC();
          } else {
            if (async && callback)
              callback(data);
            return data;
          }
        case Utils.Constants.DEFLATED:
          var inflater = new Methods.Inflater(compressedData, _centralHeader.size);
          if (!async) {
            const result = inflater.inflate(data);
            result.copy(data, 0);
            if (!crc32OK(data)) {
              throw Utils.Errors.BAD_CRC(`"${decoder.decode(_entryName)}"`);
            }
            return data;
          } else {
            inflater.inflateAsync(function(result) {
              result.copy(result, 0);
              if (callback) {
                if (!crc32OK(result)) {
                  callback(result, Utils.Errors.BAD_CRC());
                } else {
                  callback(result);
                }
              }
            });
          }
          break;
        default:
          if (async && callback)
            callback(Buffer.alloc(0), Utils.Errors.UNKNOWN_METHOD());
          throw Utils.Errors.UNKNOWN_METHOD();
      }
    }
    function compress(async, callback) {
      if ((!uncompressedData || !uncompressedData.length) && Buffer.isBuffer(input)) {
        if (async && callback)
          callback(getCompressedDataFromZip());
        return getCompressedDataFromZip();
      }
      if (uncompressedData.length && !_isDirectory) {
        var compressedData;
        switch (_centralHeader.method) {
          case Utils.Constants.STORED:
            _centralHeader.compressedSize = _centralHeader.size;
            compressedData = Buffer.alloc(uncompressedData.length);
            uncompressedData.copy(compressedData);
            if (async && callback)
              callback(compressedData);
            return compressedData;
          default:
          case Utils.Constants.DEFLATED:
            var deflater = new Methods.Deflater(uncompressedData);
            if (!async) {
              var deflated = deflater.deflate();
              _centralHeader.compressedSize = deflated.length;
              return deflated;
            } else {
              deflater.deflateAsync(function(data) {
                compressedData = Buffer.alloc(data.length);
                _centralHeader.compressedSize = data.length;
                data.copy(compressedData);
                callback && callback(compressedData);
              });
            }
            deflater = null;
            break;
        }
      } else if (async && callback) {
        callback(Buffer.alloc(0));
      } else {
        return Buffer.alloc(0);
      }
    }
    function readUInt64LE(buffer, offset) {
      return Utils.readBigUInt64LE(buffer, offset);
    }
    function parseExtra(data) {
      try {
        var offset = 0;
        var signature, size, part;
        while (offset + 4 < data.length) {
          signature = data.readUInt16LE(offset);
          offset += 2;
          size = data.readUInt16LE(offset);
          offset += 2;
          part = data.slice(offset, offset + size);
          offset += size;
          if (Constants.ID_ZIP64 === signature) {
            parseZip64ExtendedInformation(part);
          }
        }
      } catch (error) {
        throw Utils.Errors.EXTRA_FIELD_PARSE_ERROR();
      }
    }
    function parseZip64ExtendedInformation(data) {
      var size, compressedSize, offset, diskNumStart;
      if (data.length >= Constants.EF_ZIP64_SCOMP) {
        size = readUInt64LE(data, Constants.EF_ZIP64_SUNCOMP);
        if (_centralHeader.size === Constants.EF_ZIP64_OR_32) {
          _centralHeader.size = size;
        }
      }
      if (data.length >= Constants.EF_ZIP64_RHO) {
        compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
        if (_centralHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
          _centralHeader.compressedSize = compressedSize;
        }
      }
      if (data.length >= Constants.EF_ZIP64_DSN) {
        offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
        if (_centralHeader.offset === Constants.EF_ZIP64_OR_32) {
          _centralHeader.offset = offset;
        }
      }
      if (data.length >= Constants.EF_ZIP64_DSN + 4) {
        diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
        if (_centralHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
          _centralHeader.diskNumStart = diskNumStart;
        }
      }
    }
    return {
      get entryName() {
        return decoder.decode(_entryName);
      },
      get rawEntryName() {
        return _entryName;
      },
      set entryName(val) {
        _entryName = Utils.toBuffer(val, decoder.encode);
        var lastChar = _entryName[_entryName.length - 1];
        _isDirectory = lastChar === 47 || lastChar === 92;
        _centralHeader.fileNameLength = _entryName.length;
      },
      get efs() {
        if (typeof _efs === "function") {
          return _efs(this.entryName);
        } else {
          return _efs;
        }
      },
      get extra() {
        return _extra;
      },
      set extra(val) {
        _extra = val;
        _centralHeader.extraLength = val.length;
        parseExtra(val);
      },
      get comment() {
        return decoder.decode(_comment);
      },
      set comment(val) {
        _comment = Utils.toBuffer(val, decoder.encode);
        _centralHeader.commentLength = _comment.length;
        if (_comment.length > 65535)
          throw Utils.Errors.COMMENT_TOO_LONG();
      },
      get name() {
        var n = decoder.decode(_entryName);
        return _isDirectory ? n.substr(n.length - 1).split("/").pop() : n.split("/").pop();
      },
      get isDirectory() {
        return _isDirectory;
      },
      getCompressedData: function() {
        return compress(false, null);
      },
      getCompressedDataAsync: function(callback) {
        compress(true, callback);
      },
      setData: function(value) {
        uncompressedData = Utils.toBuffer(value, Utils.decoder.encode);
        if (!_isDirectory && uncompressedData.length) {
          _centralHeader.size = uncompressedData.length;
          _centralHeader.method = Utils.Constants.DEFLATED;
          _centralHeader.crc = Utils.crc32(value);
          _centralHeader.changed = true;
        } else {
          _centralHeader.method = Utils.Constants.STORED;
        }
      },
      getData: function(pass) {
        if (_centralHeader.changed) {
          return uncompressedData;
        } else {
          return decompress(false, null, pass);
        }
      },
      getDataAsync: function(callback, pass) {
        if (_centralHeader.changed) {
          callback(uncompressedData);
        } else {
          decompress(true, callback, pass);
        }
      },
      set attr(attr) {
        _centralHeader.attr = attr;
      },
      get attr() {
        return _centralHeader.attr;
      },
      set header(data) {
        _centralHeader.loadFromBinary(data);
      },
      get header() {
        return _centralHeader;
      },
      packCentralHeader: function() {
        _centralHeader.flags_efs = this.efs;
        _centralHeader.extraLength = _extra.length;
        var header = _centralHeader.centralHeaderToBinary();
        var addpos = Utils.Constants.CENHDR;
        _entryName.copy(header, addpos);
        addpos += _entryName.length;
        _extra.copy(header, addpos);
        addpos += _centralHeader.extraLength;
        _comment.copy(header, addpos);
        return header;
      },
      packLocalHeader: function() {
        let addpos = 0;
        _centralHeader.flags_efs = this.efs;
        _centralHeader.extraLocalLength = _extralocal.length;
        const localHeaderBuf = _centralHeader.localHeaderToBinary();
        const localHeader = Buffer.alloc(localHeaderBuf.length + _entryName.length + _centralHeader.extraLocalLength);
        localHeaderBuf.copy(localHeader, addpos);
        addpos += localHeaderBuf.length;
        _entryName.copy(localHeader, addpos);
        addpos += _entryName.length;
        _extralocal.copy(localHeader, addpos);
        addpos += _extralocal.length;
        return localHeader;
      },
      toJSON: function() {
        const bytes = function(nr) {
          return "<" + (nr && nr.length + " bytes buffer" || "null") + ">";
        };
        return {
          entryName: this.entryName,
          name: this.name,
          comment: this.comment,
          isDirectory: this.isDirectory,
          header: _centralHeader.toJSON(),
          compressedData: bytes(input),
          data: bytes(uncompressedData)
        };
      },
      toString: function() {
        return JSON.stringify(this.toJSON(), null, "\t");
      }
    };
  };
});

// node_modules/adm-zip/zipFile.js
var require_zipFile = __commonJS((exports, module) => {
  var ZipEntry = require_zipEntry();
  var Headers = require_headers();
  var Utils = require_util();
  module.exports = function(inBuffer, options) {
    var entryList = [], entryTable = {}, _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader, loadedEntries = false;
    var password = null;
    const temporary = new Set;
    const opts = options;
    const { noSort, decoder } = opts;
    if (inBuffer) {
      readMainHeader(opts.readEntries);
    } else {
      loadedEntries = true;
    }
    function makeTemporaryFolders() {
      const foldersList = new Set;
      for (const elem of Object.keys(entryTable)) {
        const elements = elem.split("/");
        elements.pop();
        if (!elements.length)
          continue;
        for (let i = 0;i < elements.length; i++) {
          const sub = elements.slice(0, i + 1).join("/") + "/";
          foldersList.add(sub);
        }
      }
      for (const elem of foldersList) {
        if (!(elem in entryTable)) {
          const tempfolder = new ZipEntry(opts);
          tempfolder.entryName = elem;
          tempfolder.attr = 16;
          tempfolder.temporary = true;
          entryList.push(tempfolder);
          entryTable[tempfolder.entryName] = tempfolder;
          temporary.add(tempfolder);
        }
      }
    }
    function readEntries() {
      loadedEntries = true;
      entryTable = {};
      if (mainHeader.diskEntries > (inBuffer.length - mainHeader.offset) / Utils.Constants.CENHDR) {
        throw Utils.Errors.DISK_ENTRY_TOO_LARGE();
      }
      entryList = new Array(mainHeader.diskEntries);
      var index = mainHeader.offset;
      for (var i = 0;i < entryList.length; i++) {
        var tmp = index, entry = new ZipEntry(opts, inBuffer);
        entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
        entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
        if (entry.header.extraLength) {
          entry.extra = inBuffer.slice(tmp, tmp += entry.header.extraLength);
        }
        if (entry.header.commentLength)
          entry.comment = inBuffer.slice(tmp, tmp + entry.header.commentLength);
        index += entry.header.centralHeaderSize;
        entryList[i] = entry;
        entryTable[entry.entryName] = entry;
      }
      temporary.clear();
      makeTemporaryFolders();
    }
    function readMainHeader(readNow) {
      var i = inBuffer.length - Utils.Constants.ENDHDR, max = Math.max(0, i - 65535), n = max, endStart = inBuffer.length, endOffset = -1, commentEnd = 0;
      const trailingSpace = typeof opts.trailingSpace === "boolean" ? opts.trailingSpace : false;
      if (trailingSpace)
        max = 0;
      for (i;i >= n; i--) {
        if (inBuffer[i] !== 80)
          continue;
        if (inBuffer.readUInt32LE(i) === Utils.Constants.ENDSIG) {
          endOffset = i;
          commentEnd = i;
          endStart = i + Utils.Constants.ENDHDR;
          n = i - Utils.Constants.END64HDR;
          continue;
        }
        if (inBuffer.readUInt32LE(i) === Utils.Constants.END64SIG) {
          n = max;
          continue;
        }
        if (inBuffer.readUInt32LE(i) === Utils.Constants.ZIP64SIG) {
          endOffset = i;
          endStart = i + Utils.readBigUInt64LE(inBuffer, i + Utils.Constants.ZIP64SIZE) + Utils.Constants.ZIP64LEAD;
          break;
        }
      }
      if (endOffset == -1)
        throw Utils.Errors.INVALID_FORMAT();
      mainHeader.loadFromBinary(inBuffer.slice(endOffset, endStart));
      if (mainHeader.commentLength) {
        _comment = inBuffer.slice(commentEnd + Utils.Constants.ENDHDR);
      }
      if (readNow)
        readEntries();
    }
    function sortEntries() {
      if (entryList.length > 1 && !noSort) {
        entryList.sort((a, b) => a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase()));
      }
    }
    return {
      get entries() {
        if (!loadedEntries) {
          readEntries();
        }
        return entryList.filter((e) => !temporary.has(e));
      },
      get comment() {
        return decoder.decode(_comment);
      },
      set comment(val) {
        _comment = Utils.toBuffer(val, decoder.encode);
        mainHeader.commentLength = _comment.length;
      },
      getEntryCount: function() {
        if (!loadedEntries) {
          return mainHeader.diskEntries;
        }
        return entryList.length;
      },
      forEach: function(callback) {
        this.entries.forEach(callback);
      },
      getEntry: function(entryName) {
        if (!loadedEntries) {
          readEntries();
        }
        return entryTable[entryName] || null;
      },
      setEntry: function(entry) {
        if (!loadedEntries) {
          readEntries();
        }
        entryList.push(entry);
        entryTable[entry.entryName] = entry;
        mainHeader.totalEntries = entryList.length;
      },
      deleteFile: function(entryName, withsubfolders = true) {
        if (!loadedEntries) {
          readEntries();
        }
        const entry = entryTable[entryName];
        const list = this.getEntryChildren(entry, withsubfolders).map((child) => child.entryName);
        list.forEach(this.deleteEntry);
      },
      deleteEntry: function(entryName) {
        if (!loadedEntries) {
          readEntries();
        }
        const entry = entryTable[entryName];
        const index = entryList.indexOf(entry);
        if (index >= 0) {
          entryList.splice(index, 1);
          delete entryTable[entryName];
          mainHeader.totalEntries = entryList.length;
        }
      },
      getEntryChildren: function(entry, subfolders = true) {
        if (!loadedEntries) {
          readEntries();
        }
        if (typeof entry === "object") {
          if (entry.isDirectory && subfolders) {
            const list = [];
            const name = entry.entryName;
            for (const zipEntry of entryList) {
              if (zipEntry.entryName.startsWith(name)) {
                list.push(zipEntry);
              }
            }
            return list;
          } else {
            return [entry];
          }
        }
        return [];
      },
      getChildCount: function(entry) {
        if (entry && entry.isDirectory) {
          const list = this.getEntryChildren(entry);
          return list.includes(entry) ? list.length - 1 : list.length;
        }
        return 0;
      },
      compressToBuffer: function() {
        if (!loadedEntries) {
          readEntries();
        }
        sortEntries();
        const dataBlock = [];
        const headerBlocks = [];
        let totalSize = 0;
        let dindex = 0;
        mainHeader.size = 0;
        mainHeader.offset = 0;
        let totalEntries = 0;
        for (const entry of this.entries) {
          const compressedData = entry.getCompressedData();
          entry.header.offset = dindex;
          const localHeader = entry.packLocalHeader();
          const dataLength = localHeader.length + compressedData.length;
          dindex += dataLength;
          dataBlock.push(localHeader);
          dataBlock.push(compressedData);
          const centralHeader = entry.packCentralHeader();
          headerBlocks.push(centralHeader);
          mainHeader.size += centralHeader.length;
          totalSize += dataLength + centralHeader.length;
          totalEntries++;
        }
        totalSize += mainHeader.mainHeaderSize;
        mainHeader.offset = dindex;
        mainHeader.totalEntries = totalEntries;
        dindex = 0;
        const outBuffer = Buffer.alloc(totalSize);
        for (const content of dataBlock) {
          content.copy(outBuffer, dindex);
          dindex += content.length;
        }
        for (const content of headerBlocks) {
          content.copy(outBuffer, dindex);
          dindex += content.length;
        }
        const mh = mainHeader.toBinary();
        if (_comment) {
          _comment.copy(mh, Utils.Constants.ENDHDR);
        }
        mh.copy(outBuffer, dindex);
        inBuffer = outBuffer;
        loadedEntries = false;
        return outBuffer;
      },
      toAsyncBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
        try {
          if (!loadedEntries) {
            readEntries();
          }
          sortEntries();
          const dataBlock = [];
          const centralHeaders = [];
          let totalSize = 0;
          let dindex = 0;
          let totalEntries = 0;
          mainHeader.size = 0;
          mainHeader.offset = 0;
          const compress2Buffer = function(entryLists) {
            if (entryLists.length > 0) {
              const entry = entryLists.shift();
              const name = entry.entryName + entry.extra.toString();
              if (onItemStart)
                onItemStart(name);
              entry.getCompressedDataAsync(function(compressedData) {
                if (onItemEnd)
                  onItemEnd(name);
                entry.header.offset = dindex;
                const localHeader = entry.packLocalHeader();
                const dataLength = localHeader.length + compressedData.length;
                dindex += dataLength;
                dataBlock.push(localHeader);
                dataBlock.push(compressedData);
                const centalHeader = entry.packCentralHeader();
                centralHeaders.push(centalHeader);
                mainHeader.size += centalHeader.length;
                totalSize += dataLength + centalHeader.length;
                totalEntries++;
                compress2Buffer(entryLists);
              });
            } else {
              totalSize += mainHeader.mainHeaderSize;
              mainHeader.offset = dindex;
              mainHeader.totalEntries = totalEntries;
              dindex = 0;
              const outBuffer = Buffer.alloc(totalSize);
              dataBlock.forEach(function(content) {
                content.copy(outBuffer, dindex);
                dindex += content.length;
              });
              centralHeaders.forEach(function(content) {
                content.copy(outBuffer, dindex);
                dindex += content.length;
              });
              const mh = mainHeader.toBinary();
              if (_comment) {
                _comment.copy(mh, Utils.Constants.ENDHDR);
              }
              mh.copy(outBuffer, dindex);
              inBuffer = outBuffer;
              loadedEntries = false;
              onSuccess(outBuffer);
            }
          };
          compress2Buffer(Array.from(this.entries));
        } catch (e) {
          onFail(e);
        }
      }
    };
  };
});

// node_modules/adm-zip/adm-zip.js
var require_adm_zip = __commonJS((exports, module) => {
  var Utils = require_util();
  var pth = __require("path");
  var ZipEntry = require_zipEntry();
  var ZipFile = require_zipFile();
  var get_Bool = (...val) => Utils.findLast(val, (c) => typeof c === "boolean");
  var get_Str = (...val) => Utils.findLast(val, (c) => typeof c === "string");
  var get_Fun = (...val) => Utils.findLast(val, (c) => typeof c === "function");
  var defaultOptions = {
    noSort: false,
    readEntries: false,
    method: Utils.Constants.NONE,
    fs: null
  };
  module.exports = function(input, options) {
    let inBuffer = null;
    const opts = Object.assign(Object.create(null), defaultOptions);
    if (input && typeof input === "object") {
      if (!(input instanceof Uint8Array)) {
        Object.assign(opts, input);
        input = opts.input ? opts.input : undefined;
        if (opts.input)
          delete opts.input;
      }
      if (Buffer.isBuffer(input)) {
        inBuffer = input;
        opts.method = Utils.Constants.BUFFER;
        input = undefined;
      }
    }
    Object.assign(opts, options);
    const filetools = new Utils(opts);
    if (typeof opts.decoder !== "object" || typeof opts.decoder.encode !== "function" || typeof opts.decoder.decode !== "function") {
      opts.decoder = Utils.decoder;
    }
    if (input && typeof input === "string") {
      if (filetools.fs.existsSync(input)) {
        opts.method = Utils.Constants.FILE;
        opts.filename = input;
        inBuffer = filetools.fs.readFileSync(input);
      } else {
        throw Utils.Errors.INVALID_FILENAME();
      }
    }
    const _zip = new ZipFile(inBuffer, opts);
    const { canonical, sanitize, zipnamefix } = Utils;
    function getEntry(entry) {
      if (entry && _zip) {
        var item;
        if (typeof entry === "string")
          item = _zip.getEntry(pth.posix.normalize(entry));
        if (typeof entry === "object" && typeof entry.entryName !== "undefined" && typeof entry.header !== "undefined")
          item = _zip.getEntry(entry.entryName);
        if (item) {
          return item;
        }
      }
      return null;
    }
    function fixPath(zipPath) {
      const { join, normalize, sep } = pth.posix;
      return join(pth.isAbsolute(zipPath) ? "/" : ".", normalize(sep + zipPath.split("\\").join(sep) + sep));
    }
    function filenameFilter(filterfn) {
      if (filterfn instanceof RegExp) {
        return function(rx) {
          return function(filename) {
            return rx.test(filename);
          };
        }(filterfn);
      } else if (typeof filterfn !== "function") {
        return () => true;
      }
      return filterfn;
    }
    const relativePath = (local, entry) => {
      let lastChar = entry.slice(-1);
      lastChar = lastChar === filetools.sep ? filetools.sep : "";
      return pth.relative(local, entry) + lastChar;
    };
    return {
      readFile: function(entry, pass) {
        var item = getEntry(entry);
        return item && item.getData(pass) || null;
      },
      childCount: function(entry) {
        const item = getEntry(entry);
        if (item) {
          return _zip.getChildCount(item);
        }
      },
      readFileAsync: function(entry, callback) {
        var item = getEntry(entry);
        if (item) {
          item.getDataAsync(callback);
        } else {
          callback(null, "getEntry failed for:" + entry);
        }
      },
      readAsText: function(entry, encoding) {
        var item = getEntry(entry);
        if (item) {
          var data = item.getData();
          if (data && data.length) {
            return data.toString(encoding || "utf8");
          }
        }
        return "";
      },
      readAsTextAsync: function(entry, callback, encoding) {
        var item = getEntry(entry);
        if (item) {
          item.getDataAsync(function(data, err) {
            if (err) {
              callback(data, err);
              return;
            }
            if (data && data.length) {
              callback(data.toString(encoding || "utf8"));
            } else {
              callback("");
            }
          });
        } else {
          callback("");
        }
      },
      deleteFile: function(entry, withsubfolders = true) {
        var item = getEntry(entry);
        if (item) {
          _zip.deleteFile(item.entryName, withsubfolders);
        }
      },
      deleteEntry: function(entry) {
        var item = getEntry(entry);
        if (item) {
          _zip.deleteEntry(item.entryName);
        }
      },
      addZipComment: function(comment) {
        _zip.comment = comment;
      },
      getZipComment: function() {
        return _zip.comment || "";
      },
      addZipEntryComment: function(entry, comment) {
        var item = getEntry(entry);
        if (item) {
          item.comment = comment;
        }
      },
      getZipEntryComment: function(entry) {
        var item = getEntry(entry);
        if (item) {
          return item.comment || "";
        }
        return "";
      },
      updateFile: function(entry, content) {
        var item = getEntry(entry);
        if (item) {
          item.setData(content);
        }
      },
      addLocalFile: function(localPath2, zipPath, zipName, comment) {
        if (filetools.fs.existsSync(localPath2)) {
          zipPath = zipPath ? fixPath(zipPath) : "";
          const p = pth.win32.basename(pth.win32.normalize(localPath2));
          zipPath += zipName ? zipName : p;
          const _attr = filetools.fs.statSync(localPath2);
          const data = _attr.isFile() ? filetools.fs.readFileSync(localPath2) : Buffer.alloc(0);
          if (_attr.isDirectory())
            zipPath += filetools.sep;
          this.addFile(zipPath, data, comment, _attr);
        } else {
          throw Utils.Errors.FILE_NOT_FOUND(localPath2);
        }
      },
      addLocalFileAsync: function(options2, callback) {
        options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
        const localPath2 = pth.resolve(options2.localPath);
        const { comment } = options2;
        let { zipPath, zipName } = options2;
        const self = this;
        filetools.fs.stat(localPath2, function(err, stats) {
          if (err)
            return callback(err, false);
          zipPath = zipPath ? fixPath(zipPath) : "";
          const p = pth.win32.basename(pth.win32.normalize(localPath2));
          zipPath += zipName ? zipName : p;
          if (stats.isFile()) {
            filetools.fs.readFile(localPath2, function(err2, data) {
              if (err2)
                return callback(err2, false);
              self.addFile(zipPath, data, comment, stats);
              return setImmediate(callback, undefined, true);
            });
          } else if (stats.isDirectory()) {
            zipPath += filetools.sep;
            self.addFile(zipPath, Buffer.alloc(0), comment, stats);
            return setImmediate(callback, undefined, true);
          }
        });
      },
      addLocalFolder: function(localPath2, zipPath, filter) {
        filter = filenameFilter(filter);
        zipPath = zipPath ? fixPath(zipPath) : "";
        localPath2 = pth.normalize(localPath2);
        if (filetools.fs.existsSync(localPath2)) {
          const items = filetools.findFiles(localPath2);
          const self = this;
          if (items.length) {
            for (const filepath of items) {
              const p = pth.join(zipPath, relativePath(localPath2, filepath));
              if (filter(p)) {
                self.addLocalFile(filepath, pth.dirname(p));
              }
            }
          }
        } else {
          throw Utils.Errors.FILE_NOT_FOUND(localPath2);
        }
      },
      addLocalFolderAsync: function(localPath2, callback, zipPath, filter) {
        filter = filenameFilter(filter);
        zipPath = zipPath ? fixPath(zipPath) : "";
        localPath2 = pth.normalize(localPath2);
        var self = this;
        filetools.fs.open(localPath2, "r", function(err) {
          if (err && err.code === "ENOENT") {
            callback(undefined, Utils.Errors.FILE_NOT_FOUND(localPath2));
          } else if (err) {
            callback(undefined, err);
          } else {
            var items = filetools.findFiles(localPath2);
            var i = -1;
            var next = function() {
              i += 1;
              if (i < items.length) {
                var filepath = items[i];
                var p = relativePath(localPath2, filepath).split("\\").join("/");
                p = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
                if (filter(p)) {
                  filetools.fs.stat(filepath, function(er0, stats) {
                    if (er0)
                      callback(undefined, er0);
                    if (stats.isFile()) {
                      filetools.fs.readFile(filepath, function(er1, data) {
                        if (er1) {
                          callback(undefined, er1);
                        } else {
                          self.addFile(zipPath + p, data, "", stats);
                          next();
                        }
                      });
                    } else {
                      self.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                      next();
                    }
                  });
                } else {
                  process.nextTick(() => {
                    next();
                  });
                }
              } else {
                callback(true, undefined);
              }
            };
            next();
          }
        });
      },
      addLocalFolderAsync2: function(options2, callback) {
        const self = this;
        options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
        localPath = pth.resolve(fixPath(options2.localPath));
        let { zipPath, filter, namefix } = options2;
        if (filter instanceof RegExp) {
          filter = function(rx) {
            return function(filename) {
              return rx.test(filename);
            };
          }(filter);
        } else if (typeof filter !== "function") {
          filter = function() {
            return true;
          };
        }
        zipPath = zipPath ? fixPath(zipPath) : "";
        if (namefix == "latin1") {
          namefix = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
        }
        if (typeof namefix !== "function")
          namefix = (str) => str;
        const relPathFix = (entry) => pth.join(zipPath, namefix(relativePath(localPath, entry)));
        const fileNameFix = (entry) => pth.win32.basename(pth.win32.normalize(namefix(entry)));
        filetools.fs.open(localPath, "r", function(err) {
          if (err && err.code === "ENOENT") {
            callback(undefined, Utils.Errors.FILE_NOT_FOUND(localPath));
          } else if (err) {
            callback(undefined, err);
          } else {
            filetools.findFilesAsync(localPath, function(err2, fileEntries) {
              if (err2)
                return callback(err2);
              fileEntries = fileEntries.filter((dir) => filter(relPathFix(dir)));
              if (!fileEntries.length)
                callback(undefined, false);
              setImmediate(fileEntries.reverse().reduce(function(next, entry) {
                return function(err3, done) {
                  if (err3 || done === false)
                    return setImmediate(next, err3, false);
                  self.addLocalFileAsync({
                    localPath: entry,
                    zipPath: pth.dirname(relPathFix(entry)),
                    zipName: fileNameFix(entry)
                  }, next);
                };
              }, callback));
            });
          }
        });
      },
      addLocalFolderPromise: function(localPath2, props) {
        return new Promise((resolve, reject) => {
          this.addLocalFolderAsync2(Object.assign({ localPath: localPath2 }, props), (err, done) => {
            if (err)
              reject(err);
            if (done)
              resolve(this);
          });
        });
      },
      addFile: function(entryName, content, comment, attr) {
        entryName = zipnamefix(entryName);
        let entry = getEntry(entryName);
        const update = entry != null;
        if (!update) {
          entry = new ZipEntry(opts);
          entry.entryName = entryName;
        }
        entry.comment = comment || "";
        const isStat = typeof attr === "object" && attr instanceof filetools.fs.Stats;
        if (isStat) {
          entry.header.time = attr.mtime;
        }
        var fileattr = entry.isDirectory ? 16 : 0;
        let unix = entry.isDirectory ? 16384 : 32768;
        if (isStat) {
          unix |= 4095 & attr.mode;
        } else if (typeof attr === "number") {
          unix |= 4095 & attr;
        } else {
          unix |= entry.isDirectory ? 493 : 420;
        }
        fileattr = (fileattr | unix << 16) >>> 0;
        entry.attr = fileattr;
        entry.setData(content);
        if (!update)
          _zip.setEntry(entry);
        return entry;
      },
      getEntries: function(password) {
        _zip.password = password;
        return _zip ? _zip.entries : [];
      },
      getEntry: function(name) {
        return getEntry(name);
      },
      getEntryCount: function() {
        return _zip.getEntryCount();
      },
      forEach: function(callback) {
        return _zip.forEach(callback);
      },
      extractEntryTo: function(entry, targetPath, maintainEntryPath, overwrite, keepOriginalPermission, outFileName) {
        overwrite = get_Bool(false, overwrite);
        keepOriginalPermission = get_Bool(false, keepOriginalPermission);
        maintainEntryPath = get_Bool(true, maintainEntryPath);
        outFileName = get_Str(keepOriginalPermission, outFileName);
        var item = getEntry(entry);
        if (!item) {
          throw Utils.Errors.NO_ENTRY();
        }
        var entryName = canonical(item.entryName);
        var target = sanitize(targetPath, outFileName && !item.isDirectory ? outFileName : maintainEntryPath ? entryName : pth.basename(entryName));
        if (item.isDirectory) {
          var children = _zip.getEntryChildren(item);
          children.forEach(function(child) {
            if (child.isDirectory)
              return;
            var content2 = child.getData();
            if (!content2) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
            var name = canonical(child.entryName);
            var childName = sanitize(targetPath, maintainEntryPath ? name : pth.basename(name));
            const fileAttr2 = keepOriginalPermission ? child.header.fileAttr : undefined;
            filetools.writeFileTo(childName, content2, overwrite, fileAttr2);
          });
          return true;
        }
        var content = item.getData(_zip.password);
        if (!content)
          throw Utils.Errors.CANT_EXTRACT_FILE();
        if (filetools.fs.existsSync(target) && !overwrite) {
          throw Utils.Errors.CANT_OVERRIDE();
        }
        const fileAttr = keepOriginalPermission ? entry.header.fileAttr : undefined;
        filetools.writeFileTo(target, content, overwrite, fileAttr);
        return true;
      },
      test: function(pass) {
        if (!_zip) {
          return false;
        }
        for (var entry in _zip.entries) {
          try {
            if (entry.isDirectory) {
              continue;
            }
            var content = _zip.entries[entry].getData(pass);
            if (!content) {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
        return true;
      },
      extractAllTo: function(targetPath, overwrite, keepOriginalPermission, pass) {
        keepOriginalPermission = get_Bool(false, keepOriginalPermission);
        pass = get_Str(keepOriginalPermission, pass);
        overwrite = get_Bool(false, overwrite);
        if (!_zip)
          throw Utils.Errors.NO_ZIP();
        _zip.entries.forEach(function(entry) {
          var entryName = sanitize(targetPath, canonical(entry.entryName));
          if (entry.isDirectory) {
            filetools.makeDir(entryName);
            return;
          }
          var content = entry.getData(pass);
          if (!content) {
            throw Utils.Errors.CANT_EXTRACT_FILE();
          }
          const fileAttr = keepOriginalPermission ? entry.header.fileAttr : undefined;
          filetools.writeFileTo(entryName, content, overwrite, fileAttr);
          try {
            filetools.fs.utimesSync(entryName, entry.header.time, entry.header.time);
          } catch (err) {
            throw Utils.Errors.CANT_EXTRACT_FILE();
          }
        });
      },
      extractAllToAsync: function(targetPath, overwrite, keepOriginalPermission, callback) {
        callback = get_Fun(overwrite, keepOriginalPermission, callback);
        keepOriginalPermission = get_Bool(false, keepOriginalPermission);
        overwrite = get_Bool(false, overwrite);
        if (!callback) {
          return new Promise((resolve, reject) => {
            this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
              if (err) {
                reject(err);
              } else {
                resolve(this);
              }
            });
          });
        }
        if (!_zip) {
          callback(Utils.Errors.NO_ZIP());
          return;
        }
        targetPath = pth.resolve(targetPath);
        const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName)));
        const getError = (msg, file) => new Error(msg + ': "' + file + '"');
        const dirEntries = [];
        const fileEntries = [];
        _zip.entries.forEach((e) => {
          if (e.isDirectory) {
            dirEntries.push(e);
          } else {
            fileEntries.push(e);
          }
        });
        for (const entry of dirEntries) {
          const dirPath = getPath(entry);
          const dirAttr = keepOriginalPermission ? entry.header.fileAttr : undefined;
          try {
            filetools.makeDir(dirPath);
            if (dirAttr)
              filetools.fs.chmodSync(dirPath, dirAttr);
            filetools.fs.utimesSync(dirPath, entry.header.time, entry.header.time);
          } catch (er) {
            callback(getError("Unable to create folder", dirPath));
          }
        }
        fileEntries.reverse().reduce(function(next, entry) {
          return function(err) {
            if (err) {
              next(err);
            } else {
              const entryName = pth.normalize(canonical(entry.entryName));
              const filePath = sanitize(targetPath, entryName);
              entry.getDataAsync(function(content, err_1) {
                if (err_1) {
                  next(err_1);
                } else if (!content) {
                  next(Utils.Errors.CANT_EXTRACT_FILE());
                } else {
                  const fileAttr = keepOriginalPermission ? entry.header.fileAttr : undefined;
                  filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                    if (!succ) {
                      next(getError("Unable to write file", filePath));
                    }
                    filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function(err_2) {
                      if (err_2) {
                        next(getError("Unable to set times", filePath));
                      } else {
                        next();
                      }
                    });
                  });
                }
              });
            }
          };
        }, callback)();
      },
      writeZip: function(targetFileName, callback) {
        if (arguments.length === 1) {
          if (typeof targetFileName === "function") {
            callback = targetFileName;
            targetFileName = "";
          }
        }
        if (!targetFileName && opts.filename) {
          targetFileName = opts.filename;
        }
        if (!targetFileName)
          return;
        var zipData = _zip.compressToBuffer();
        if (zipData) {
          var ok = filetools.writeFileTo(targetFileName, zipData, true);
          if (typeof callback === "function")
            callback(!ok ? new Error("failed") : null, "");
        }
      },
      writeZipPromise: function(targetFileName, props) {
        const { overwrite, perm } = Object.assign({ overwrite: true }, props);
        return new Promise((resolve, reject) => {
          if (!targetFileName && opts.filename)
            targetFileName = opts.filename;
          if (!targetFileName)
            reject("ADM-ZIP: ZIP File Name Missing");
          this.toBufferPromise().then((zipData) => {
            const ret = (done) => done ? resolve(done) : reject("ADM-ZIP: Wasn't able to write zip file");
            filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
          }, reject);
        });
      },
      toBufferPromise: function() {
        return new Promise((resolve, reject) => {
          _zip.toAsyncBuffer(resolve, reject);
        });
      },
      toBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
        if (typeof onSuccess === "function") {
          _zip.toAsyncBuffer(onSuccess, onFail, onItemStart, onItemEnd);
          return null;
        }
        return _zip.compressToBuffer();
      }
    };
  };
});

// node_modules/cli-width/index.js
var require_cli_width = __commonJS((exports, module) => {
  module.exports = cliWidth;
  function normalizeOpts(options) {
    const defaultOpts = {
      defaultWidth: 0,
      output: process.stdout,
      tty: __require("tty")
    };
    if (!options) {
      return defaultOpts;
    }
    Object.keys(defaultOpts).forEach(function(key) {
      if (!options[key]) {
        options[key] = defaultOpts[key];
      }
    });
    return options;
  }
  function cliWidth(options) {
    const opts = normalizeOpts(options);
    if (opts.output.getWindowSize) {
      return opts.output.getWindowSize()[0] || opts.defaultWidth;
    }
    if (opts.tty.getWindowSize) {
      return opts.tty.getWindowSize()[1] || opts.defaultWidth;
    }
    if (opts.output.columns) {
      return opts.output.columns;
    }
    if (process.env.CLI_WIDTH) {
      const width = parseInt(process.env.CLI_WIDTH, 10);
      if (!isNaN(width) && width !== 0) {
        return width;
      }
    }
    return opts.defaultWidth;
  }
});

// node_modules/mute-stream/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var Stream = __require("stream");

  class MuteStream extends Stream {
    #isTTY = null;
    constructor(opts = {}) {
      super(opts);
      this.writable = this.readable = true;
      this.muted = false;
      this.on("pipe", this._onpipe);
      this.replace = opts.replace;
      this._prompt = opts.prompt || null;
      this._hadControl = false;
    }
    #destSrc(key, def) {
      if (this._dest) {
        return this._dest[key];
      }
      if (this._src) {
        return this._src[key];
      }
      return def;
    }
    #proxy(method, ...args) {
      if (typeof this._dest?.[method] === "function") {
        this._dest[method](...args);
      }
      if (typeof this._src?.[method] === "function") {
        this._src[method](...args);
      }
    }
    get isTTY() {
      if (this.#isTTY !== null) {
        return this.#isTTY;
      }
      return this.#destSrc("isTTY", false);
    }
    set isTTY(val) {
      this.#isTTY = val;
    }
    get rows() {
      return this.#destSrc("rows");
    }
    get columns() {
      return this.#destSrc("columns");
    }
    mute() {
      this.muted = true;
    }
    unmute() {
      this.muted = false;
    }
    _onpipe(src) {
      this._src = src;
    }
    pipe(dest, options) {
      this._dest = dest;
      return super.pipe(dest, options);
    }
    pause() {
      if (this._src) {
        return this._src.pause();
      }
    }
    resume() {
      if (this._src) {
        return this._src.resume();
      }
    }
    write(c) {
      if (this.muted) {
        if (!this.replace) {
          return true;
        }
        if (c.match(/^\u001b/)) {
          if (c.indexOf(this._prompt) === 0) {
            c = c.slice(this._prompt.length);
            c = c.replace(/./g, this.replace);
            c = this._prompt + c;
          }
          this._hadControl = true;
          return this.emit("data", c);
        } else {
          if (this._prompt && this._hadControl && c.indexOf(this._prompt) === 0) {
            this._hadControl = false;
            this.emit("data", this._prompt);
            c = c.slice(this._prompt.length);
          }
          c = c.toString().replace(/./g, this.replace);
        }
      }
      this.emit("data", c);
    }
    end(c) {
      if (this.muted) {
        if (c && this.replace) {
          c = c.toString().replace(/./g, this.replace);
        } else {
          c = null;
        }
      }
      if (c) {
        this.emit("data", c);
      }
      this.emit("end");
    }
    destroy(...args) {
      return this.#proxy("destroy", ...args);
    }
    destroySoon(...args) {
      return this.#proxy("destroySoon", ...args);
    }
    close(...args) {
      return this.#proxy("close", ...args);
    }
  }
  module.exports = MuteStream;
});

// src/platform/detector.ts
import os from "node:os";
function detectPlatform() {
  const platform = process.platform;
  const arch = process.arch;
  const detectedOS = platform === "win32" ? "windows" : platform === "darwin" ? "macos" : "linux";
  const detectedArch = arch === "arm64" ? "arm64" : "x86_64";
  return {
    os: detectedOS,
    arch: detectedArch,
    gcloudDownloadUrl: getGcloudDownloadUrl(detectedOS, detectedArch),
    gcloudBinaryName: platform === "win32" ? "gcloud.cmd" : "gcloud",
    isWindows: platform === "win32"
  };
}
function getGcloudDownloadUrl(os2, arch) {
  const baseUrl = "https://dl.google.com/dl/cloudsdk/channels/rapid/downloads";
  if (os2 === "macos") {
    if (arch === "arm64") {
      return `${baseUrl}/google-cloud-cli-darwin-arm.tar.gz`;
    }
    return `${baseUrl}/google-cloud-cli-darwin-x86_64.tar.gz`;
  }
  if (os2 === "linux") {
    return `${baseUrl}/google-cloud-cli-linux-x86_64.tar.gz`;
  }
  if (os2 === "windows") {
    return `${baseUrl}/google-cloud-cli-windows-x86_64-bundled-python.zip`;
  }
  throw new Error(`Unsupported platform: ${os2} ${arch}`);
}
function getHomeDir() {
  return os.homedir();
}
function getStitchDir() {
  return `${getHomeDir()}/.stitch-mcp`;
}
function getGcloudSdkPath() {
  return `${getStitchDir()}/google-cloud-sdk`;
}
function getGcloudConfigPath() {
  return `${getStitchDir()}/config`;
}

// src/platform/shell.ts
import * as childProcess from "node:child_process";
function getSpawnArgs(command, args) {
  if (process.platform === "win32") {
    return {
      cmd: "cmd.exe",
      args: ["/d", "/s", "/c", command, ...args]
    };
  }
  return { cmd: command, args };
}
async function execCommand(command, options) {
  const cmd = command[0];
  if (!cmd)
    throw new Error("Command cannot be empty");
  const args = command.slice(1);
  return new Promise((resolve) => {
    const stdoutChunks = [];
    const stderrChunks = [];
    const spawnOptions = {
      cwd: options?.cwd || process.cwd(),
      env: { ...process.env, ...options?.env || {} },
      stdio: "pipe",
      timeout: options?.timeout,
      shell: false
    };
    const { cmd: spawnCmd, args: spawnArgs } = getSpawnArgs(cmd, args);
    const child = childProcess.spawn(spawnCmd, spawnArgs, spawnOptions);
    if (child.stdout) {
      child.stdout.on("data", (data) => {
        stdoutChunks.push(data);
      });
    }
    if (child.stderr) {
      child.stderr.on("data", (data) => {
        stderrChunks.push(data);
      });
    }
    child.on("error", (err) => {
      resolve({
        success: false,
        stdout: Buffer.concat(stdoutChunks).toString(),
        stderr: Buffer.concat(stderrChunks).toString(),
        exitCode: 1,
        error: err.message
      });
    });
    child.on("close", (code) => {
      resolve({
        success: code === 0,
        stdout: Buffer.concat(stdoutChunks).toString(),
        stderr: Buffer.concat(stderrChunks).toString(),
        exitCode: code ?? 1
      });
    });
  });
}
async function commandExists(command) {
  const result = await execCommand(process.platform === "win32" ? ["where", command] : ["which", command]);
  return result.success;
}

// src/platform/paths.ts
import path from "node:path";
function joinPath(...parts) {
  return path.join(...parts);
}

// src/services/gcloud/core.ts
import fs from "node:fs";

class GcloudExecutor {
  platform = detectPlatform();
  gcloudPath = null;
  useSystemGcloud = false;
  constructor() {}
  setGcloudPath(path2, isSystem) {
    this.gcloudPath = path2;
    this.useSystemGcloud = isSystem;
    this.setupEnvironment();
  }
  getGcloudPath() {
    return this.gcloudPath;
  }
  isSystemGcloud() {
    return this.useSystemGcloud;
  }
  setupEnvironment() {
    if (this.gcloudPath && !this.useSystemGcloud && !process.env.STITCH_USE_SYSTEM_GCLOUD) {
      const sdkPath = getGcloudSdkPath();
      const binPath = joinPath(sdkPath, "bin");
      process.env.PATH = `${binPath}:${process.env.PATH}`;
      const configPath = getGcloudConfigPath();
      process.env.CLOUDSDK_CONFIG = configPath;
      process.env.CLOUDSDK_CORE_DISABLE_PROMPTS = "1";
      process.env.CLOUDSDK_COMPONENT_MANAGER_DISABLE_UPDATE_CHECK = "1";
      process.env.CLOUDSDK_CORE_DISABLE_USAGE_REPORTING = "true";
    }
  }
  getEnvironment(useSystem) {
    if (useSystem || this.useSystemGcloud || process.env.STITCH_USE_SYSTEM_GCLOUD) {
      return {};
    }
    const configPath = getGcloudConfigPath();
    return {
      CLOUDSDK_CONFIG: configPath,
      CLOUDSDK_CORE_DISABLE_PROMPTS: "1",
      CLOUDSDK_COMPONENT_MANAGER_DISABLE_UPDATE_CHECK: "1",
      CLOUDSDK_CORE_DISABLE_USAGE_REPORTING: "true"
    };
  }
  async getGcloudCommand() {
    if (this.gcloudPath) {
      return this.gcloudPath;
    }
    if (this.useSystemGcloud || process.env.STITCH_USE_SYSTEM_GCLOUD) {
      return this.platform.gcloudBinaryName;
    }
    const sdkPath = getGcloudSdkPath();
    const localBinaryPath = joinPath(sdkPath, "bin", this.platform.gcloudBinaryName);
    try {
      await fs.promises.access(localBinaryPath, fs.constants.F_OK);
      this.gcloudPath = localBinaryPath;
      this.setupEnvironment();
      return localBinaryPath;
    } catch {
      return this.platform.gcloudBinaryName;
    }
  }
  async exec(args, options) {
    const cmd = await this.getGcloudCommand();
    const env = { ...this.getEnvironment(), ...options?.env || {} };
    return execCommand([cmd, ...args], { ...options, env });
  }
  async execRaw(command, options) {
    const env = { ...this.getEnvironment(), ...options?.env || {} };
    return execCommand(command, { ...options, env });
  }
}

// src/services/gcloud/install.ts
var import_adm_zip = __toESM(require_adm_zip(), 1);
import fs2 from "node:fs";
class GcloudInstallService {
  executor;
  constructor(executor) {
    this.executor = executor;
  }
  async ensureInstalled(input) {
    if (!input.forceLocal) {
      const globalPath = await this.findGlobalGcloud();
      if (globalPath) {
        const version2 = await this.getVersionFromPath(globalPath);
        if (version2 && this.isVersionValid(version2, input.minVersion)) {
          this.executor.setGcloudPath(globalPath, true);
          return {
            success: true,
            data: {
              version: version2,
              location: "system",
              path: globalPath
            }
          };
        }
      }
    }
    const localSdkPath = getGcloudSdkPath();
    const localBinaryPath = joinPath(localSdkPath, "bin", this.executor.platform.gcloudBinaryName);
    let localExists = false;
    try {
      await fs2.promises.access(localBinaryPath, fs2.constants.F_OK);
      localExists = true;
    } catch {}
    if (localExists) {
      const version2 = await this.getVersionFromPath(localBinaryPath);
      if (version2) {
        this.executor.setGcloudPath(localBinaryPath, false);
        return {
          success: true,
          data: {
            version: version2,
            location: "bundled",
            path: localBinaryPath
          }
        };
      }
    }
    if (!input.forceLocal) {
      const globalPath = await this.findGlobalGcloud();
      if (globalPath) {
        const version2 = await this.getVersionFromPath(globalPath);
        if (version2 && this.isVersionValid(version2, input.minVersion)) {
          this.executor.setGcloudPath(globalPath, true);
          return {
            success: true,
            data: {
              version: version2,
              location: "system",
              path: globalPath
            }
          };
        }
      }
    }
    const localPath2 = await this.installLocal();
    if (!localPath2) {
      return {
        success: false,
        error: {
          code: "DOWNLOAD_FAILED",
          message: "Failed to install gcloud locally",
          suggestion: "Check your internet connection and try again",
          recoverable: true
        }
      };
    }
    const version = await this.getVersionFromPath(localPath2);
    if (!version) {
      return {
        success: false,
        error: {
          code: "VERSION_CHECK_FAILED",
          message: "Could not determine gcloud version",
          recoverable: false
        }
      };
    }
    this.executor.setGcloudPath(localPath2, false);
    return {
      success: true,
      data: {
        version,
        location: "bundled",
        path: localPath2
      }
    };
  }
  async installBetaComponents() {
    try {
      const result = await this.executor.exec(["components", "install", "beta", "--quiet"]);
      if (!result.success) {
        return {
          success: false,
          error: {
            message: `Failed to install beta components: ${result.stderr || result.error || "Unknown error"}`
          }
        };
      }
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : String(error)
        }
      };
    }
  }
  async findGlobalGcloud() {
    const exists = await commandExists(this.executor.platform.gcloudBinaryName);
    if (!exists) {
      return null;
    }
    const result = await execCommand(this.executor.platform.isWindows ? ["where", this.executor.platform.gcloudBinaryName] : ["which", this.executor.platform.gcloudBinaryName]);
    if (result.success) {
      return result.stdout.trim().split(`
`)[0] || null;
    }
    return null;
  }
  async getVersionFromPath(gcloudPath) {
    const result = await execCommand([gcloudPath, "version", "--format=json"]);
    if (result.success) {
      try {
        const versionData = JSON.parse(result.stdout);
        return versionData["Google Cloud SDK"] || null;
      } catch {
        const match = result.stdout.match(/Google Cloud SDK ([\d.]+)/);
        return match?.[1] || null;
      }
    }
    return null;
  }
  isVersionValid(current, minimum) {
    const currentParts = current.split(".").map(Number);
    const minimumParts = minimum.split(".").map(Number);
    for (let i = 0;i < Math.max(currentParts.length, minimumParts.length); i++) {
      const cur = currentParts[i] || 0;
      const min = minimumParts[i] || 0;
      if (cur > min)
        return true;
      if (cur < min)
        return false;
    }
    return true;
  }
  async installLocal() {
    const sdkPath = getGcloudSdkPath();
    const stitchDir = getStitchDir();
    await fs2.promises.mkdir(stitchDir, { recursive: true });
    const downloadUrl = this.executor.platform.gcloudDownloadUrl;
    const downloadPath = joinPath(stitchDir, this.executor.platform.isWindows ? "gcloud.zip" : "gcloud.tar.gz");
    try {
      const response = await fetch(downloadUrl);
      if (!response.ok) {
        return null;
      }
      const buffer = await response.arrayBuffer();
      await fs2.promises.writeFile(downloadPath, Buffer.from(buffer));
      if (this.executor.platform.isWindows) {
        const zip = new import_adm_zip.default(downloadPath);
        await new Promise((resolve, reject) => {
          zip.extractAllToAsync(stitchDir, true, false, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      } else {
        await execCommand(["tar", "-xzf", downloadPath, "-C", stitchDir]);
      }
      await fs2.promises.unlink(downloadPath);
      return joinPath(sdkPath, "bin", this.executor.platform.gcloudBinaryName);
    } catch {
      return null;
    }
  }
}

// src/services/gcloud/auth.ts
import fs3 from "node:fs";
class GcloudAuthService {
  executor;
  constructor(executor) {
    this.executor = executor;
  }
  async authenticate(input) {
    try {
      if (input.skipIfActive) {
        const activeAccount = await this.getActiveAccount();
        if (activeAccount) {
          return {
            success: true,
            data: {
              account: activeAccount,
              type: "user"
            }
          };
        }
      }
      const result = await this.runAuthFlow(["auth", "login"]);
      if (!result.success) {
        return {
          success: false,
          error: {
            code: "AUTH_FAILED",
            message: "Failed to authenticate with gcloud",
            suggestion: "Complete the browser authentication flow",
            recoverable: true
          }
        };
      }
      const account = await this.getActiveAccount();
      if (!account) {
        return {
          success: false,
          error: {
            code: "AUTH_FAILED",
            message: "Authentication appeared to succeed but no active account found",
            recoverable: false
          }
        };
      }
      return {
        success: true,
        data: {
          account,
          type: "user"
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "AUTH_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
  async authenticateADC(input) {
    try {
      if (input.skipIfActive) {
        const hasADC = await this.hasADC();
        if (hasADC) {
          const account2 = await this.getActiveAccount();
          return {
            success: true,
            data: {
              account: account2 || "unknown",
              type: "adc"
            }
          };
        }
      }
      const result = await this.runAuthFlow(["auth", "application-default", "login"]);
      if (!result.success) {
        return {
          success: false,
          error: {
            code: "ADC_FAILED",
            message: "Failed to authenticate application default credentials",
            suggestion: "Complete the browser authentication flow",
            recoverable: true
          }
        };
      }
      const account = await this.getActiveAccount();
      return {
        success: true,
        data: {
          account: account || "unknown",
          type: "adc"
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "ADC_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
  async getAccessToken() {
    try {
      const result = await this.executor.exec(["auth", "application-default", "print-access-token"]);
      if (result.success) {
        return result.stdout.trim();
      }
      const loginCmd = await this.getLoginCommand();
      console.error(`[Gcloud] Token fetch failed. Please run:

  ${loginCmd}

to obtain new credentials.`);
      return null;
    } catch (e) {
      console.error("[Gcloud] Token fetch exception:", e);
      return null;
    }
  }
  async getActiveAccount() {
    const result = await this.executor.exec(["auth", "list", "--filter=status:ACTIVE", "--format=value(account)"]);
    if (result.success && result.stdout.trim()) {
      return result.stdout.trim().split(`
`)[0] || null;
    }
    return null;
  }
  async hasADC() {
    let fileExists = false;
    if (!this.executor.isSystemGcloud() && !process.env.STITCH_USE_SYSTEM_GCLOUD) {
      const stitchConfigPath = getGcloudConfigPath();
      const stitchAdcPath = joinPath(stitchConfigPath, "application_default_credentials.json");
      try {
        await fs3.promises.access(stitchAdcPath, fs3.constants.F_OK);
        fileExists = true;
      } catch {
        fileExists = false;
      }
    } else {
      try {
        const result = await this.executor.exec(["info", "--format=value(config.paths.global_config_dir)"]);
        if (result.success && result.stdout.trim()) {
          const configDir = result.stdout.trim();
          const adcPath = joinPath(configDir, "application_default_credentials.json");
          try {
            await fs3.promises.access(adcPath, fs3.constants.F_OK);
            fileExists = true;
          } catch {
            fileExists = false;
          }
        }
      } catch {}
    }
    if (!fileExists) {
      return false;
    }
    try {
      const result = await this.executor.exec(["auth", "application-default", "print-access-token"]);
      return result.success && !!result.stdout.trim();
    } catch {
      return false;
    }
  }
  async runAuthFlow(authArgs) {
    console.log(theme.gray("  Opening browser for authentication..."));
    const noBrowserResult = await this.executor.exec([...authArgs, "--no-launch-browser"], { timeout: 5000 });
    const outputText = noBrowserResult.stderr || noBrowserResult.stdout || "";
    const urlMatch = outputText.match(/https:\/\/accounts\.google\.com[^\s]+/);
    if (urlMatch) {
      console.log(theme.gray(`  If it doesn't open automatically, visit this URL: ${theme.cyan(urlMatch[0])}
`));
    } else {
      console.log(theme.gray(`  Note: Could not extract authentication URL from gcloud output
`));
    }
    return this.executor.exec([...authArgs, "--quiet"]);
  }
  async getLoginCommand() {
    const gcloudCmd = await this.executor.getGcloudCommand();
    if (this.executor.isSystemGcloud() || process.env.STITCH_USE_SYSTEM_GCLOUD) {
      return `${gcloudCmd} auth application-default login`;
    }
    const configPath = getGcloudConfigPath();
    return `CLOUDSDK_CONFIG="${configPath}" ${gcloudCmd} auth application-default login`;
  }
}

// src/services/gcloud/spec.ts
var PROJECT_ID_REGEX = /^[a-z][a-z0-9-]{4,28}[a-z0-9]$/;
var EnsureGcloudInputSchema = exports_external.object({
  minVersion: exports_external.string().default("400.0.0"),
  forceLocal: exports_external.boolean().default(false),
  useSystemGcloud: exports_external.boolean().default(false).optional()
});
var AuthenticateInputSchema = exports_external.object({
  skipIfActive: exports_external.boolean().default(true)
});
var ListProjectsInputSchema = exports_external.object({
  limit: exports_external.number().optional(),
  filter: exports_external.string().optional(),
  sortBy: exports_external.string().optional()
});
var SetProjectInputSchema = exports_external.object({
  projectId: exports_external.string().regex(PROJECT_ID_REGEX, {
    message: "Invalid project ID format. Project IDs must be 6-30 characters, start with a letter, end with a letter or number, and contain only lowercase letters, numbers, and hyphens."
  })
});
var GcloudErrorCode = exports_external.enum([
  "DOWNLOAD_FAILED",
  "EXTRACTION_FAILED",
  "VERSION_CHECK_FAILED",
  "INVALID_VERSION",
  "AUTH_FAILED",
  "ADC_FAILED",
  "PROJECT_LIST_FAILED",
  "PROJECT_SET_FAILED",
  "COMMAND_NOT_FOUND",
  "UNKNOWN_ERROR"
]);
var GcloudInstallDataSchema = exports_external.object({
  version: exports_external.string(),
  location: exports_external.enum(["system", "bundled"]),
  path: exports_external.string()
});
var GcloudSuccess = exports_external.object({
  success: exports_external.literal(true),
  data: GcloudInstallDataSchema
});
var GcloudFailure = exports_external.object({
  success: exports_external.literal(false),
  error: exports_external.object({
    code: GcloudErrorCode,
    message: exports_external.string(),
    suggestion: exports_external.string().optional(),
    recoverable: exports_external.boolean()
  })
});
var AuthDataSchema = exports_external.object({
  account: exports_external.string(),
  type: exports_external.enum(["user", "adc"])
});
var AuthSuccess = exports_external.object({
  success: exports_external.literal(true),
  data: AuthDataSchema
});
var AuthFailure = exports_external.object({
  success: exports_external.literal(false),
  error: exports_external.object({
    code: GcloudErrorCode,
    message: exports_external.string(),
    suggestion: exports_external.string().optional(),
    recoverable: exports_external.boolean()
  })
});
var ProjectSchema = exports_external.object({
  projectId: exports_external.string(),
  name: exports_external.string(),
  projectNumber: exports_external.string().optional(),
  createTime: exports_external.string().optional()
});
var ProjectListSuccess = exports_external.object({
  success: exports_external.literal(true),
  data: exports_external.object({
    projects: exports_external.array(ProjectSchema)
  })
});
var ProjectListFailure = exports_external.object({
  success: exports_external.literal(false),
  error: exports_external.object({
    code: GcloudErrorCode,
    message: exports_external.string(),
    suggestion: exports_external.string().optional(),
    recoverable: exports_external.boolean()
  })
});
var ProjectSetSuccess = exports_external.object({
  success: exports_external.literal(true),
  data: exports_external.object({
    projectId: exports_external.string()
  })
});
var ProjectSetFailure = exports_external.object({
  success: exports_external.literal(false),
  error: exports_external.object({
    code: GcloudErrorCode,
    message: exports_external.string(),
    suggestion: exports_external.string().optional(),
    recoverable: exports_external.boolean()
  })
});

// src/services/gcloud/projects.ts
class GcloudProjectService {
  executor;
  constructor(executor) {
    this.executor = executor;
  }
  async listProjects(input) {
    try {
      const args = ["projects", "list", "--format=json"];
      if (input.limit) {
        args.push(`--limit=${input.limit}`);
      }
      if (input.filter) {
        args.push(`--filter=${input.filter}`);
      }
      if (input.sortBy) {
        args.push(`--sort-by=${input.sortBy}`);
      }
      const result = await this.executor.exec(args);
      if (!result.success) {
        return {
          success: false,
          error: {
            code: "PROJECT_LIST_FAILED",
            message: `Failed to list projects: ${result.stderr}`,
            suggestion: "Ensure you are authenticated and have access to projects",
            recoverable: true
          }
        };
      }
      const projects = JSON.parse(result.stdout);
      return {
        success: true,
        data: {
          projects: projects.map((p) => ({
            projectId: p.projectId,
            name: p.name,
            projectNumber: p.projectNumber,
            createTime: p.createTime
          }))
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "PROJECT_LIST_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
  async setProject(input) {
    if (!PROJECT_ID_REGEX.test(input.projectId)) {
      return {
        success: false,
        error: {
          code: "PROJECT_SET_FAILED",
          message: `Invalid project ID: ${input.projectId}. Project IDs must be 6-30 characters, start with a letter, and contain only lowercase letters, numbers, and hyphens.`,
          suggestion: "Verify the project ID is correct",
          recoverable: false
        }
      };
    }
    try {
      const result = await this.executor.exec(["config", "set", "project", input.projectId, "--quiet"]);
      if (!result.success) {
        return {
          success: false,
          error: {
            code: "PROJECT_SET_FAILED",
            message: `Failed to set project: ${input.projectId}`,
            suggestion: "Verify the project ID is correct",
            recoverable: true
          }
        };
      }
      return {
        success: true,
        data: {
          projectId: input.projectId
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "PROJECT_SET_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
  async getProjectId() {
    if (process.env.STITCH_PROJECT_ID) {
      return process.env.STITCH_PROJECT_ID;
    }
    if (process.env.GOOGLE_CLOUD_PROJECT) {
      return process.env.GOOGLE_CLOUD_PROJECT;
    }
    try {
      const result = await this.executor.exec(["config", "get-value", "project"]);
      if (result.success && result.stdout.trim()) {
        return result.stdout.trim();
      }
      return null;
    } catch (e) {
      return null;
    }
  }
}

// src/services/gcloud/handler.ts
class GcloudHandler {
  executor;
  installService;
  authService;
  projectService;
  constructor() {
    this.executor = new GcloudExecutor;
    this.installService = new GcloudInstallService(this.executor);
    this.authService = new GcloudAuthService(this.executor);
    this.projectService = new GcloudProjectService(this.executor);
  }
  async ensureInstalled(input) {
    return this.installService.ensureInstalled(input);
  }
  async authenticate(input) {
    return this.authService.authenticate(input);
  }
  async authenticateADC(input) {
    return this.authService.authenticateADC(input);
  }
  async listProjects(input) {
    return this.projectService.listProjects(input);
  }
  async setProject(input) {
    return this.projectService.setProject(input);
  }
  async getAccessToken() {
    return this.authService.getAccessToken();
  }
  async getProjectId() {
    return this.projectService.getProjectId();
  }
  async installBetaComponents() {
    return this.installService.installBetaComponents();
  }
  async getActiveAccount() {
    return this.authService.getActiveAccount();
  }
  async hasADC() {
    return this.authService.hasADC();
  }
}

// node_modules/@inquirer/core/dist/lib/key.js
var isUpKey = (key, keybindings = []) => key.name === "up" || keybindings.includes("vim") && key.name === "k" || keybindings.includes("emacs") && key.ctrl && key.name === "p";
var isDownKey = (key, keybindings = []) => key.name === "down" || keybindings.includes("vim") && key.name === "j" || keybindings.includes("emacs") && key.ctrl && key.name === "n";
var isBackspaceKey = (key) => key.name === "backspace";
var isTabKey = (key) => key.name === "tab";
var isNumberKey = (key) => "1234567890".includes(key.name);
var isEnterKey = (key) => key.name === "enter" || key.name === "return";
// node_modules/@inquirer/core/dist/lib/errors.js
class AbortPromptError extends Error {
  name = "AbortPromptError";
  message = "Prompt was aborted";
  constructor(options) {
    super();
    this.cause = options?.cause;
  }
}

class CancelPromptError extends Error {
  name = "CancelPromptError";
  message = "Prompt was canceled";
}

class ExitPromptError extends Error {
  name = "ExitPromptError";
}

class HookError extends Error {
  name = "HookError";
}

class ValidationError extends Error {
  name = "ValidationError";
}
// node_modules/@inquirer/core/dist/lib/use-state.js
import { AsyncResource as AsyncResource2 } from "node:async_hooks";

// node_modules/@inquirer/core/dist/lib/hook-engine.js
import { AsyncLocalStorage, AsyncResource } from "node:async_hooks";
var hookStorage = new AsyncLocalStorage;
function createStore(rl) {
  const store = {
    rl,
    hooks: [],
    hooksCleanup: [],
    hooksEffect: [],
    index: 0,
    handleChange() {}
  };
  return store;
}
function withHooks(rl, cb) {
  const store = createStore(rl);
  return hookStorage.run(store, () => {
    function cycle(render) {
      store.handleChange = () => {
        store.index = 0;
        render();
      };
      store.handleChange();
    }
    return cb(cycle);
  });
}
function getStore() {
  const store = hookStorage.getStore();
  if (!store) {
    throw new HookError("[Inquirer] Hook functions can only be called from within a prompt");
  }
  return store;
}
function readline() {
  return getStore().rl;
}
function withUpdates(fn) {
  const wrapped = (...args) => {
    const store = getStore();
    let shouldUpdate = false;
    const oldHandleChange = store.handleChange;
    store.handleChange = () => {
      shouldUpdate = true;
    };
    const returnValue = fn(...args);
    if (shouldUpdate) {
      oldHandleChange();
    }
    store.handleChange = oldHandleChange;
    return returnValue;
  };
  return AsyncResource.bind(wrapped);
}
function withPointer(cb) {
  const store = getStore();
  const { index } = store;
  const pointer = {
    get() {
      return store.hooks[index];
    },
    set(value) {
      store.hooks[index] = value;
    },
    initialized: index in store.hooks
  };
  const returnValue = cb(pointer);
  store.index++;
  return returnValue;
}
function handleChange() {
  getStore().handleChange();
}
var effectScheduler = {
  queue(cb) {
    const store = getStore();
    const { index } = store;
    store.hooksEffect.push(() => {
      store.hooksCleanup[index]?.();
      const cleanFn = cb(readline());
      if (cleanFn != null && typeof cleanFn !== "function") {
        throw new ValidationError("useEffect return value must be a cleanup function or nothing.");
      }
      store.hooksCleanup[index] = cleanFn;
    });
  },
  run() {
    const store = getStore();
    withUpdates(() => {
      store.hooksEffect.forEach((effect) => {
        effect();
      });
      store.hooksEffect.length = 0;
    })();
  },
  clearAll() {
    const store = getStore();
    store.hooksCleanup.forEach((cleanFn) => {
      cleanFn?.();
    });
    store.hooksEffect.length = 0;
    store.hooksCleanup.length = 0;
  }
};

// node_modules/@inquirer/core/dist/lib/use-state.js
function useState(defaultValue) {
  return withPointer((pointer) => {
    const setState = AsyncResource2.bind(function setState2(newValue) {
      if (pointer.get() !== newValue) {
        pointer.set(newValue);
        handleChange();
      }
    });
    if (pointer.initialized) {
      return [pointer.get(), setState];
    }
    const value = typeof defaultValue === "function" ? defaultValue() : defaultValue;
    pointer.set(value);
    return [value, setState];
  });
}

// node_modules/@inquirer/core/dist/lib/use-effect.js
function useEffect(cb, depArray) {
  withPointer((pointer) => {
    const oldDeps = pointer.get();
    const hasChanged = !Array.isArray(oldDeps) || depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    if (hasChanged) {
      effectScheduler.queue(cb);
    }
    pointer.set(depArray);
  });
}

// node_modules/@inquirer/core/dist/lib/theme.js
import { styleText } from "node:util";

// node_modules/@inquirer/figures/dist/index.js
import process2 from "node:process";
function isUnicodeSupported() {
  if (process2.platform !== "win32") {
    return process2.env["TERM"] !== "linux";
  }
  return Boolean(process2.env["WT_SESSION"]) || Boolean(process2.env["TERMINUS_SUBLIME"]) || process2.env["ConEmuTask"] === "{cmd::Cmder}" || process2.env["TERM_PROGRAM"] === "Terminus-Sublime" || process2.env["TERM_PROGRAM"] === "vscode" || process2.env["TERM"] === "xterm-256color" || process2.env["TERM"] === "alacritty" || process2.env["TERMINAL_EMULATOR"] === "JetBrains-JediTerm";
}
var common = {
  circleQuestionMark: "(?)",
  questionMarkPrefix: "(?)",
  square: "█",
  squareDarkShade: "▓",
  squareMediumShade: "▒",
  squareLightShade: "░",
  squareTop: "▀",
  squareBottom: "▄",
  squareLeft: "▌",
  squareRight: "▐",
  squareCenter: "■",
  bullet: "●",
  dot: "․",
  ellipsis: "…",
  pointerSmall: "›",
  triangleUp: "▲",
  triangleUpSmall: "▴",
  triangleDown: "▼",
  triangleDownSmall: "▾",
  triangleLeftSmall: "◂",
  triangleRightSmall: "▸",
  home: "⌂",
  heart: "♥",
  musicNote: "♪",
  musicNoteBeamed: "♫",
  arrowUp: "↑",
  arrowDown: "↓",
  arrowLeft: "←",
  arrowRight: "→",
  arrowLeftRight: "↔",
  arrowUpDown: "↕",
  almostEqual: "≈",
  notEqual: "≠",
  lessOrEqual: "≤",
  greaterOrEqual: "≥",
  identical: "≡",
  infinity: "∞",
  subscriptZero: "₀",
  subscriptOne: "₁",
  subscriptTwo: "₂",
  subscriptThree: "₃",
  subscriptFour: "₄",
  subscriptFive: "₅",
  subscriptSix: "₆",
  subscriptSeven: "₇",
  subscriptEight: "₈",
  subscriptNine: "₉",
  oneHalf: "½",
  oneThird: "⅓",
  oneQuarter: "¼",
  oneFifth: "⅕",
  oneSixth: "⅙",
  oneEighth: "⅛",
  twoThirds: "⅔",
  twoFifths: "⅖",
  threeQuarters: "¾",
  threeFifths: "⅗",
  threeEighths: "⅜",
  fourFifths: "⅘",
  fiveSixths: "⅚",
  fiveEighths: "⅝",
  sevenEighths: "⅞",
  line: "─",
  lineBold: "━",
  lineDouble: "═",
  lineDashed0: "┄",
  lineDashed1: "┅",
  lineDashed2: "┈",
  lineDashed3: "┉",
  lineDashed4: "╌",
  lineDashed5: "╍",
  lineDashed6: "╴",
  lineDashed7: "╶",
  lineDashed8: "╸",
  lineDashed9: "╺",
  lineDashed10: "╼",
  lineDashed11: "╾",
  lineDashed12: "−",
  lineDashed13: "–",
  lineDashed14: "‐",
  lineDashed15: "⁃",
  lineVertical: "│",
  lineVerticalBold: "┃",
  lineVerticalDouble: "║",
  lineVerticalDashed0: "┆",
  lineVerticalDashed1: "┇",
  lineVerticalDashed2: "┊",
  lineVerticalDashed3: "┋",
  lineVerticalDashed4: "╎",
  lineVerticalDashed5: "╏",
  lineVerticalDashed6: "╵",
  lineVerticalDashed7: "╷",
  lineVerticalDashed8: "╹",
  lineVerticalDashed9: "╻",
  lineVerticalDashed10: "╽",
  lineVerticalDashed11: "╿",
  lineDownLeft: "┐",
  lineDownLeftArc: "╮",
  lineDownBoldLeftBold: "┓",
  lineDownBoldLeft: "┒",
  lineDownLeftBold: "┑",
  lineDownDoubleLeftDouble: "╗",
  lineDownDoubleLeft: "╖",
  lineDownLeftDouble: "╕",
  lineDownRight: "┌",
  lineDownRightArc: "╭",
  lineDownBoldRightBold: "┏",
  lineDownBoldRight: "┎",
  lineDownRightBold: "┍",
  lineDownDoubleRightDouble: "╔",
  lineDownDoubleRight: "╓",
  lineDownRightDouble: "╒",
  lineUpLeft: "┘",
  lineUpLeftArc: "╯",
  lineUpBoldLeftBold: "┛",
  lineUpBoldLeft: "┚",
  lineUpLeftBold: "┙",
  lineUpDoubleLeftDouble: "╝",
  lineUpDoubleLeft: "╜",
  lineUpLeftDouble: "╛",
  lineUpRight: "└",
  lineUpRightArc: "╰",
  lineUpBoldRightBold: "┗",
  lineUpBoldRight: "┖",
  lineUpRightBold: "┕",
  lineUpDoubleRightDouble: "╚",
  lineUpDoubleRight: "╙",
  lineUpRightDouble: "╘",
  lineUpDownLeft: "┤",
  lineUpBoldDownBoldLeftBold: "┫",
  lineUpBoldDownBoldLeft: "┨",
  lineUpDownLeftBold: "┥",
  lineUpBoldDownLeftBold: "┩",
  lineUpDownBoldLeftBold: "┪",
  lineUpDownBoldLeft: "┧",
  lineUpBoldDownLeft: "┦",
  lineUpDoubleDownDoubleLeftDouble: "╣",
  lineUpDoubleDownDoubleLeft: "╢",
  lineUpDownLeftDouble: "╡",
  lineUpDownRight: "├",
  lineUpBoldDownBoldRightBold: "┣",
  lineUpBoldDownBoldRight: "┠",
  lineUpDownRightBold: "┝",
  lineUpBoldDownRightBold: "┡",
  lineUpDownBoldRightBold: "┢",
  lineUpDownBoldRight: "┟",
  lineUpBoldDownRight: "┞",
  lineUpDoubleDownDoubleRightDouble: "╠",
  lineUpDoubleDownDoubleRight: "╟",
  lineUpDownRightDouble: "╞",
  lineDownLeftRight: "┬",
  lineDownBoldLeftBoldRightBold: "┳",
  lineDownLeftBoldRightBold: "┯",
  lineDownBoldLeftRight: "┰",
  lineDownBoldLeftBoldRight: "┱",
  lineDownBoldLeftRightBold: "┲",
  lineDownLeftRightBold: "┮",
  lineDownLeftBoldRight: "┭",
  lineDownDoubleLeftDoubleRightDouble: "╦",
  lineDownDoubleLeftRight: "╥",
  lineDownLeftDoubleRightDouble: "╤",
  lineUpLeftRight: "┴",
  lineUpBoldLeftBoldRightBold: "┻",
  lineUpLeftBoldRightBold: "┷",
  lineUpBoldLeftRight: "┸",
  lineUpBoldLeftBoldRight: "┹",
  lineUpBoldLeftRightBold: "┺",
  lineUpLeftRightBold: "┶",
  lineUpLeftBoldRight: "┵",
  lineUpDoubleLeftDoubleRightDouble: "╩",
  lineUpDoubleLeftRight: "╨",
  lineUpLeftDoubleRightDouble: "╧",
  lineUpDownLeftRight: "┼",
  lineUpBoldDownBoldLeftBoldRightBold: "╋",
  lineUpDownBoldLeftBoldRightBold: "╈",
  lineUpBoldDownLeftBoldRightBold: "╇",
  lineUpBoldDownBoldLeftRightBold: "╊",
  lineUpBoldDownBoldLeftBoldRight: "╉",
  lineUpBoldDownLeftRight: "╀",
  lineUpDownBoldLeftRight: "╁",
  lineUpDownLeftBoldRight: "┽",
  lineUpDownLeftRightBold: "┾",
  lineUpBoldDownBoldLeftRight: "╂",
  lineUpDownLeftBoldRightBold: "┿",
  lineUpBoldDownLeftBoldRight: "╃",
  lineUpBoldDownLeftRightBold: "╄",
  lineUpDownBoldLeftBoldRight: "╅",
  lineUpDownBoldLeftRightBold: "╆",
  lineUpDoubleDownDoubleLeftDoubleRightDouble: "╬",
  lineUpDoubleDownDoubleLeftRight: "╫",
  lineUpDownLeftDoubleRightDouble: "╪",
  lineCross: "╳",
  lineBackslash: "╲",
  lineSlash: "╱"
};
var specialMainSymbols = {
  tick: "✔",
  info: "ℹ",
  warning: "⚠",
  cross: "✘",
  squareSmall: "◻",
  squareSmallFilled: "◼",
  circle: "◯",
  circleFilled: "◉",
  circleDotted: "◌",
  circleDouble: "◎",
  circleCircle: "ⓞ",
  circleCross: "ⓧ",
  circlePipe: "Ⓘ",
  radioOn: "◉",
  radioOff: "◯",
  checkboxOn: "☒",
  checkboxOff: "☐",
  checkboxCircleOn: "ⓧ",
  checkboxCircleOff: "Ⓘ",
  pointer: "❯",
  triangleUpOutline: "△",
  triangleLeft: "◀",
  triangleRight: "▶",
  lozenge: "◆",
  lozengeOutline: "◇",
  hamburger: "☰",
  smiley: "㋡",
  mustache: "෴",
  star: "★",
  play: "▶",
  nodejs: "⬢",
  oneSeventh: "⅐",
  oneNinth: "⅑",
  oneTenth: "⅒"
};
var specialFallbackSymbols = {
  tick: "√",
  info: "i",
  warning: "‼",
  cross: "×",
  squareSmall: "□",
  squareSmallFilled: "■",
  circle: "( )",
  circleFilled: "(*)",
  circleDotted: "( )",
  circleDouble: "( )",
  circleCircle: "(○)",
  circleCross: "(×)",
  circlePipe: "(│)",
  radioOn: "(*)",
  radioOff: "( )",
  checkboxOn: "[×]",
  checkboxOff: "[ ]",
  checkboxCircleOn: "(×)",
  checkboxCircleOff: "( )",
  pointer: ">",
  triangleUpOutline: "∆",
  triangleLeft: "◄",
  triangleRight: "►",
  lozenge: "♦",
  lozengeOutline: "◊",
  hamburger: "≡",
  smiley: "☺",
  mustache: "┌─┐",
  star: "✶",
  play: "►",
  nodejs: "♦",
  oneSeventh: "1/7",
  oneNinth: "1/9",
  oneTenth: "1/10"
};
var mainSymbols = {
  ...common,
  ...specialMainSymbols
};
var fallbackSymbols = {
  ...common,
  ...specialFallbackSymbols
};
var shouldUseMain = isUnicodeSupported();
var figures = shouldUseMain ? mainSymbols : fallbackSymbols;
var dist_default = figures;
var replacements = Object.entries(specialMainSymbols);

// node_modules/@inquirer/core/dist/lib/theme.js
var defaultTheme = {
  prefix: {
    idle: styleText("blue", "?"),
    done: styleText("green", dist_default.tick)
  },
  spinner: {
    interval: 80,
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"].map((frame) => styleText("yellow", frame))
  },
  style: {
    answer: (text) => styleText("cyan", text),
    message: (text) => styleText("bold", text),
    error: (text) => styleText("red", `> ${text}`),
    defaultAnswer: (text) => styleText("dim", `(${text})`),
    help: (text) => styleText("dim", text),
    highlight: (text) => styleText("cyan", text),
    key: (text) => styleText("cyan", styleText("bold", `<${text}>`))
  }
};

// node_modules/@inquirer/core/dist/lib/make-theme.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
function deepMerge(...objects) {
  const output = {};
  for (const obj of objects) {
    for (const [key, value] of Object.entries(obj)) {
      const prevValue = output[key];
      output[key] = isPlainObject(prevValue) && isPlainObject(value) ? deepMerge(prevValue, value) : value;
    }
  }
  return output;
}
function makeTheme(...themes) {
  const themesToMerge = [
    defaultTheme,
    ...themes.filter((theme2) => theme2 != null)
  ];
  return deepMerge(...themesToMerge);
}

// node_modules/@inquirer/core/dist/lib/use-prefix.js
function usePrefix({ status = "idle", theme: theme2 }) {
  const [showLoader, setShowLoader] = useState(false);
  const [tick, setTick] = useState(0);
  const { prefix, spinner } = makeTheme(theme2);
  useEffect(() => {
    if (status === "loading") {
      let tickInterval;
      let inc = -1;
      const delayTimeout = setTimeout(() => {
        setShowLoader(true);
        tickInterval = setInterval(() => {
          inc = inc + 1;
          setTick(inc % spinner.frames.length);
        }, spinner.interval);
      }, 300);
      return () => {
        clearTimeout(delayTimeout);
        clearInterval(tickInterval);
      };
    } else {
      setShowLoader(false);
    }
  }, [status]);
  if (showLoader) {
    return spinner.frames[tick];
  }
  const iconName = status === "loading" ? "idle" : status;
  return typeof prefix === "string" ? prefix : prefix[iconName] ?? prefix["idle"];
}
// node_modules/@inquirer/core/dist/lib/use-memo.js
function useMemo(fn, dependencies) {
  return withPointer((pointer) => {
    const prev = pointer.get();
    if (!prev || prev.dependencies.length !== dependencies.length || prev.dependencies.some((dep, i) => dep !== dependencies[i])) {
      const value = fn();
      pointer.set({ value, dependencies });
      return value;
    }
    return prev.value;
  });
}
// node_modules/@inquirer/core/dist/lib/use-ref.js
function useRef(val) {
  return useState({ current: val })[0];
}
// node_modules/@inquirer/core/dist/lib/use-keypress.js
function useKeypress(userHandler) {
  const signal = useRef(userHandler);
  signal.current = userHandler;
  useEffect((rl) => {
    let ignore = false;
    const handler = withUpdates((_input, event) => {
      if (ignore)
        return;
      signal.current(event, rl);
    });
    rl.input.on("keypress", handler);
    return () => {
      ignore = true;
      rl.input.removeListener("keypress", handler);
    };
  }, []);
}
// node_modules/@inquirer/core/dist/lib/utils.js
var import_cli_width = __toESM(require_cli_width(), 1);

// node_modules/fast-string-truncated-width/dist/utils.js
var getCodePointsLength = (() => {
  const SURROGATE_PAIR_RE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  return (input) => {
    let surrogatePairsNr = 0;
    SURROGATE_PAIR_RE.lastIndex = 0;
    while (SURROGATE_PAIR_RE.test(input)) {
      surrogatePairsNr += 1;
    }
    return input.length - surrogatePairsNr;
  };
})();
var isFullWidth = (x) => {
  return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
};
var isWideNotCJKTNotEmoji = (x) => {
  return x === 8987 || x === 9001 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12771 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 19903 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
};

// node_modules/fast-string-truncated-width/dist/index.js
var ANSI_RE = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]|\u001b\]8;[^;]*;.*?(?:\u0007|\u001b\u005c)/y;
var CONTROL_RE = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
var CJKT_WIDE_RE = /(?:(?![\uFF61-\uFF9F\uFF00-\uFFEF])[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Tangut}]){1,1000}/yu;
var TAB_RE = /\t{1,1000}/y;
var EMOJI_RE = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu;
var LATIN_RE = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
var MODIFIER_RE = /\p{M}+/gu;
var NO_TRUNCATION = { limit: Infinity, ellipsis: "" };
var getStringTruncatedWidth = (input, truncationOptions = {}, widthOptions = {}) => {
  const LIMIT = truncationOptions.limit ?? Infinity;
  const ELLIPSIS = truncationOptions.ellipsis ?? "";
  const ELLIPSIS_WIDTH = truncationOptions?.ellipsisWidth ?? (ELLIPSIS ? getStringTruncatedWidth(ELLIPSIS, NO_TRUNCATION, widthOptions).width : 0);
  const ANSI_WIDTH = 0;
  const CONTROL_WIDTH = widthOptions.controlWidth ?? 0;
  const TAB_WIDTH = widthOptions.tabWidth ?? 8;
  const EMOJI_WIDTH = widthOptions.emojiWidth ?? 2;
  const FULL_WIDTH_WIDTH = 2;
  const REGULAR_WIDTH = widthOptions.regularWidth ?? 1;
  const WIDE_WIDTH = widthOptions.wideWidth ?? FULL_WIDTH_WIDTH;
  const PARSE_BLOCKS = [
    [LATIN_RE, REGULAR_WIDTH],
    [ANSI_RE, ANSI_WIDTH],
    [CONTROL_RE, CONTROL_WIDTH],
    [TAB_RE, TAB_WIDTH],
    [EMOJI_RE, EMOJI_WIDTH],
    [CJKT_WIDE_RE, WIDE_WIDTH]
  ];
  let indexPrev = 0;
  let index = 0;
  let length = input.length;
  let lengthExtra = 0;
  let truncationEnabled = false;
  let truncationIndex = length;
  let truncationLimit = Math.max(0, LIMIT - ELLIPSIS_WIDTH);
  let unmatchedStart = 0;
  let unmatchedEnd = 0;
  let width = 0;
  let widthExtra = 0;
  outer:
    while (true) {
      if (unmatchedEnd > unmatchedStart || index >= length && index > indexPrev) {
        const unmatched = input.slice(unmatchedStart, unmatchedEnd) || input.slice(indexPrev, index);
        lengthExtra = 0;
        for (const char of unmatched.replaceAll(MODIFIER_RE, "")) {
          const codePoint = char.codePointAt(0) || 0;
          if (isFullWidth(codePoint)) {
            widthExtra = FULL_WIDTH_WIDTH;
          } else if (isWideNotCJKTNotEmoji(codePoint)) {
            widthExtra = WIDE_WIDTH;
          } else {
            widthExtra = REGULAR_WIDTH;
          }
          if (width + widthExtra > truncationLimit) {
            truncationIndex = Math.min(truncationIndex, Math.max(unmatchedStart, indexPrev) + lengthExtra);
          }
          if (width + widthExtra > LIMIT) {
            truncationEnabled = true;
            break outer;
          }
          lengthExtra += char.length;
          width += widthExtra;
        }
        unmatchedStart = unmatchedEnd = 0;
      }
      if (index >= length) {
        break outer;
      }
      for (let i = 0, l = PARSE_BLOCKS.length;i < l; i++) {
        const [BLOCK_RE, BLOCK_WIDTH] = PARSE_BLOCKS[i];
        BLOCK_RE.lastIndex = index;
        if (BLOCK_RE.test(input)) {
          lengthExtra = BLOCK_RE === CJKT_WIDE_RE ? getCodePointsLength(input.slice(index, BLOCK_RE.lastIndex)) : BLOCK_RE === EMOJI_RE ? 1 : BLOCK_RE.lastIndex - index;
          widthExtra = lengthExtra * BLOCK_WIDTH;
          if (width + widthExtra > truncationLimit) {
            truncationIndex = Math.min(truncationIndex, index + Math.floor((truncationLimit - width) / BLOCK_WIDTH));
          }
          if (width + widthExtra > LIMIT) {
            truncationEnabled = true;
            break outer;
          }
          width += widthExtra;
          unmatchedStart = indexPrev;
          unmatchedEnd = index;
          index = indexPrev = BLOCK_RE.lastIndex;
          continue outer;
        }
      }
      index += 1;
    }
  return {
    width: truncationEnabled ? truncationLimit : width,
    index: truncationEnabled ? truncationIndex : length,
    truncated: truncationEnabled,
    ellipsed: truncationEnabled && LIMIT >= ELLIPSIS_WIDTH
  };
};
var dist_default2 = getStringTruncatedWidth;

// node_modules/fast-string-width/dist/index.js
var NO_TRUNCATION2 = {
  limit: Infinity,
  ellipsis: "",
  ellipsisWidth: 0
};
var fastStringWidth = (input, options = {}) => {
  return dist_default2(input, NO_TRUNCATION2, options).width;
};
var dist_default3 = fastStringWidth;

// node_modules/fast-wrap-ansi/lib/main.js
var ESC = "\x1B";
var CSI = "";
var END_CODE = 39;
var ANSI_ESCAPE_BELL = "\x07";
var ANSI_CSI = "[";
var ANSI_OSC = "]";
var ANSI_SGR_TERMINATOR = "m";
var ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
var GROUP_REGEX = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`, "y");
var getClosingCode = (openingCode) => {
  if (openingCode >= 30 && openingCode <= 37)
    return 39;
  if (openingCode >= 90 && openingCode <= 97)
    return 39;
  if (openingCode >= 40 && openingCode <= 47)
    return 49;
  if (openingCode >= 100 && openingCode <= 107)
    return 49;
  if (openingCode === 1 || openingCode === 2)
    return 22;
  if (openingCode === 3)
    return 23;
  if (openingCode === 4)
    return 24;
  if (openingCode === 7)
    return 27;
  if (openingCode === 8)
    return 28;
  if (openingCode === 9)
    return 29;
  if (openingCode === 0)
    return 0;
  return;
};
var wrapAnsiCode = (code) => `${ESC}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
var wrapAnsiHyperlink = (url) => `${ESC}${ANSI_ESCAPE_LINK}${url}${ANSI_ESCAPE_BELL}`;
var wrapWord = (rows, word, columns) => {
  const characters = word[Symbol.iterator]();
  let isInsideEscape = false;
  let isInsideLinkEscape = false;
  let lastRow = rows.at(-1);
  let visible = lastRow === undefined ? 0 : dist_default3(lastRow);
  let currentCharacter = characters.next();
  let nextCharacter = characters.next();
  let rawCharacterIndex = 0;
  while (!currentCharacter.done) {
    const character = currentCharacter.value;
    const characterLength = dist_default3(character);
    if (visible + characterLength <= columns) {
      rows[rows.length - 1] += character;
    } else {
      rows.push(character);
      visible = 0;
    }
    if (character === ESC || character === CSI) {
      isInsideEscape = true;
      isInsideLinkEscape = word.startsWith(ANSI_ESCAPE_LINK, rawCharacterIndex + 1);
    }
    if (isInsideEscape) {
      if (isInsideLinkEscape) {
        if (character === ANSI_ESCAPE_BELL) {
          isInsideEscape = false;
          isInsideLinkEscape = false;
        }
      } else if (character === ANSI_SGR_TERMINATOR) {
        isInsideEscape = false;
      }
    } else {
      visible += characterLength;
      if (visible === columns && !nextCharacter.done) {
        rows.push("");
        visible = 0;
      }
    }
    currentCharacter = nextCharacter;
    nextCharacter = characters.next();
    rawCharacterIndex += character.length;
  }
  lastRow = rows.at(-1);
  if (!visible && lastRow !== undefined && lastRow.length && rows.length > 1) {
    rows[rows.length - 2] += rows.pop();
  }
};
var stringVisibleTrimSpacesRight = (string) => {
  const words = string.split(" ");
  let last = words.length;
  while (last) {
    if (dist_default3(words[last - 1])) {
      break;
    }
    last--;
  }
  if (last === words.length) {
    return string;
  }
  return words.slice(0, last).join(" ") + words.slice(last).join("");
};
var exec = (string, columns, options = {}) => {
  if (options.trim !== false && string.trim() === "") {
    return "";
  }
  let returnValue = "";
  let escapeCode;
  let escapeUrl;
  const words = string.split(" ");
  let rows = [""];
  let rowLength = 0;
  for (let index = 0;index < words.length; index++) {
    const word = words[index];
    if (options.trim !== false) {
      const row = rows.at(-1) ?? "";
      const trimmed = row.trimStart();
      if (row.length !== trimmed.length) {
        rows[rows.length - 1] = trimmed;
        rowLength = dist_default3(trimmed);
      }
    }
    if (index !== 0) {
      if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
        rows.push("");
        rowLength = 0;
      }
      if (rowLength || options.trim === false) {
        rows[rows.length - 1] += " ";
        rowLength++;
      }
    }
    const wordLength = dist_default3(word);
    if (options.hard && wordLength > columns) {
      const remainingColumns = columns - rowLength;
      const breaksStartingThisLine = 1 + Math.floor((wordLength - remainingColumns - 1) / columns);
      const breaksStartingNextLine = Math.floor((wordLength - 1) / columns);
      if (breaksStartingNextLine < breaksStartingThisLine) {
        rows.push("");
      }
      wrapWord(rows, word, columns);
      rowLength = dist_default3(rows.at(-1) ?? "");
      continue;
    }
    if (rowLength + wordLength > columns && rowLength && wordLength) {
      if (options.wordWrap === false && rowLength < columns) {
        wrapWord(rows, word, columns);
        rowLength = dist_default3(rows.at(-1) ?? "");
        continue;
      }
      rows.push("");
      rowLength = 0;
    }
    if (rowLength + wordLength > columns && options.wordWrap === false) {
      wrapWord(rows, word, columns);
      rowLength = dist_default3(rows.at(-1) ?? "");
      continue;
    }
    rows[rows.length - 1] += word;
    rowLength += wordLength;
  }
  if (options.trim !== false) {
    rows = rows.map((row) => stringVisibleTrimSpacesRight(row));
  }
  const preString = rows.join(`
`);
  let inSurrogate = false;
  for (let i = 0;i < preString.length; i++) {
    const character = preString[i];
    returnValue += character;
    if (!inSurrogate) {
      inSurrogate = character >= "\uD800" && character <= "\uDBFF";
      if (inSurrogate) {
        continue;
      }
    } else {
      inSurrogate = false;
    }
    if (character === ESC || character === CSI) {
      GROUP_REGEX.lastIndex = i + 1;
      const groupsResult = GROUP_REGEX.exec(preString);
      const groups = groupsResult?.groups;
      if (groups?.code !== undefined) {
        const code = Number.parseFloat(groups.code);
        escapeCode = code === END_CODE ? undefined : code;
      } else if (groups?.uri !== undefined) {
        escapeUrl = groups.uri.length === 0 ? undefined : groups.uri;
      }
    }
    if (preString[i + 1] === `
`) {
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink("");
      }
      const closingCode = escapeCode ? getClosingCode(escapeCode) : undefined;
      if (escapeCode && closingCode) {
        returnValue += wrapAnsiCode(closingCode);
      }
    } else if (character === `
`) {
      if (escapeCode && getClosingCode(escapeCode)) {
        returnValue += wrapAnsiCode(escapeCode);
      }
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink(escapeUrl);
      }
    }
  }
  return returnValue;
};
var CRLF_OR_LF = /\r?\n/;
function wrapAnsi(string, columns, options) {
  return String(string).normalize().split(CRLF_OR_LF).map((line) => exec(line, columns, options)).join(`
`);
}

// node_modules/@inquirer/core/dist/lib/utils.js
function breakLines(content, width) {
  return content.split(`
`).flatMap((line) => wrapAnsi(line, width, { trim: false, hard: true }).split(`
`).map((str) => str.trimEnd())).join(`
`);
}
function readlineWidth() {
  return import_cli_width.default({ defaultWidth: 80, output: readline().output });
}

// node_modules/@inquirer/core/dist/lib/pagination/use-pagination.js
function usePointerPosition({ active, renderedItems, pageSize, loop }) {
  const state = useRef({
    lastPointer: active,
    lastActive: undefined
  });
  const { lastPointer, lastActive } = state.current;
  const middle = Math.floor(pageSize / 2);
  const renderedLength = renderedItems.reduce((acc, item) => acc + item.length, 0);
  const defaultPointerPosition = renderedItems.slice(0, active).reduce((acc, item) => acc + item.length, 0);
  let pointer = defaultPointerPosition;
  if (renderedLength > pageSize) {
    if (loop) {
      pointer = lastPointer;
      if (lastActive != null && lastActive < active && active - lastActive < pageSize) {
        pointer = Math.min(middle, Math.abs(active - lastActive) === 1 ? Math.min(lastPointer + (renderedItems[lastActive]?.length ?? 0), Math.max(defaultPointerPosition, lastPointer)) : lastPointer + active - lastActive);
      }
    } else {
      const spaceUnderActive = renderedItems.slice(active).reduce((acc, item) => acc + item.length, 0);
      pointer = spaceUnderActive < pageSize - middle ? pageSize - spaceUnderActive : Math.min(defaultPointerPosition, middle);
    }
  }
  state.current.lastPointer = pointer;
  state.current.lastActive = active;
  return pointer;
}
function usePagination({ items, active, renderItem, pageSize, loop = true }) {
  const width = readlineWidth();
  const bound = (num) => (num % items.length + items.length) % items.length;
  const renderedItems = items.map((item, index) => {
    if (item == null)
      return [];
    return breakLines(renderItem({ item, index, isActive: index === active }), width).split(`
`);
  });
  const renderedLength = renderedItems.reduce((acc, item) => acc + item.length, 0);
  const renderItemAtIndex = (index) => renderedItems[index] ?? [];
  const pointer = usePointerPosition({ active, renderedItems, pageSize, loop });
  const activeItem = renderItemAtIndex(active).slice(0, pageSize);
  const activeItemPosition = pointer + activeItem.length <= pageSize ? pointer : pageSize - activeItem.length;
  const pageBuffer = Array.from({ length: pageSize });
  pageBuffer.splice(activeItemPosition, activeItem.length, ...activeItem);
  const itemVisited = new Set([active]);
  let bufferPointer = activeItemPosition + activeItem.length;
  let itemPointer = bound(active + 1);
  while (bufferPointer < pageSize && !itemVisited.has(itemPointer) && (loop && renderedLength > pageSize ? itemPointer !== active : itemPointer > active)) {
    const lines = renderItemAtIndex(itemPointer);
    const linesToAdd = lines.slice(0, pageSize - bufferPointer);
    pageBuffer.splice(bufferPointer, linesToAdd.length, ...linesToAdd);
    itemVisited.add(itemPointer);
    bufferPointer += linesToAdd.length;
    itemPointer = bound(itemPointer + 1);
  }
  bufferPointer = activeItemPosition - 1;
  itemPointer = bound(active - 1);
  while (bufferPointer >= 0 && !itemVisited.has(itemPointer) && (loop && renderedLength > pageSize ? itemPointer !== active : itemPointer < active)) {
    const lines = renderItemAtIndex(itemPointer);
    const linesToAdd = lines.slice(Math.max(0, lines.length - bufferPointer - 1));
    pageBuffer.splice(bufferPointer - linesToAdd.length + 1, linesToAdd.length, ...linesToAdd);
    itemVisited.add(itemPointer);
    bufferPointer -= linesToAdd.length;
    itemPointer = bound(itemPointer - 1);
  }
  return pageBuffer.filter((line) => typeof line === "string").join(`
`);
}
// node_modules/@inquirer/core/dist/lib/create-prompt.js
var import_mute_stream = __toESM(require_lib(), 1);
import * as readline2 from "node:readline";
import { AsyncResource as AsyncResource3 } from "node:async_hooks";

// node_modules/@inquirer/core/dist/lib/screen-manager.js
import { stripVTControlCharacters } from "node:util";

// node_modules/@inquirer/ansi/dist/index.js
var ESC2 = "\x1B[";
var cursorLeft = ESC2 + "G";
var cursorHide = ESC2 + "?25l";
var cursorShow = ESC2 + "?25h";
var cursorUp = (rows = 1) => rows > 0 ? `${ESC2}${rows}A` : "";
var cursorDown = (rows = 1) => rows > 0 ? `${ESC2}${rows}B` : "";
var cursorTo = (x, y) => {
  if (typeof y === "number" && !Number.isNaN(y)) {
    return `${ESC2}${y + 1};${x + 1}H`;
  }
  return `${ESC2}${x + 1}G`;
};
var eraseLine = ESC2 + "2K";
var eraseLines = (lines) => lines > 0 ? (eraseLine + cursorUp(1)).repeat(lines - 1) + eraseLine + cursorLeft : "";

// node_modules/@inquirer/core/dist/lib/screen-manager.js
var height = (content) => content.split(`
`).length;
var lastLine = (content) => content.split(`
`).pop() ?? "";

class ScreenManager {
  height = 0;
  extraLinesUnderPrompt = 0;
  cursorPos;
  rl;
  constructor(rl) {
    this.rl = rl;
    this.cursorPos = rl.getCursorPos();
  }
  write(content) {
    this.rl.output.unmute();
    this.rl.output.write(content);
    this.rl.output.mute();
  }
  render(content, bottomContent = "") {
    const promptLine = lastLine(content);
    const rawPromptLine = stripVTControlCharacters(promptLine);
    let prompt = rawPromptLine;
    if (this.rl.line.length > 0) {
      prompt = prompt.slice(0, -this.rl.line.length);
    }
    this.rl.setPrompt(prompt);
    this.cursorPos = this.rl.getCursorPos();
    const width = readlineWidth();
    content = breakLines(content, width);
    bottomContent = breakLines(bottomContent, width);
    if (rawPromptLine.length % width === 0) {
      content += `
`;
    }
    let output = content + (bottomContent ? `
` + bottomContent : "");
    const promptLineUpDiff = Math.floor(rawPromptLine.length / width) - this.cursorPos.rows;
    const bottomContentHeight = promptLineUpDiff + (bottomContent ? height(bottomContent) : 0);
    if (bottomContentHeight > 0)
      output += cursorUp(bottomContentHeight);
    output += cursorTo(this.cursorPos.cols);
    this.write(cursorDown(this.extraLinesUnderPrompt) + eraseLines(this.height) + output);
    this.extraLinesUnderPrompt = bottomContentHeight;
    this.height = height(output);
  }
  checkCursorPos() {
    const cursorPos = this.rl.getCursorPos();
    if (cursorPos.cols !== this.cursorPos.cols) {
      this.write(cursorTo(cursorPos.cols));
      this.cursorPos = cursorPos;
    }
  }
  done({ clearContent }) {
    this.rl.setPrompt("");
    let output = cursorDown(this.extraLinesUnderPrompt);
    output += clearContent ? eraseLines(this.height) : `
`;
    output += cursorShow;
    this.write(output);
    this.rl.close();
  }
}

// node_modules/@inquirer/core/dist/lib/promise-polyfill.js
class PromisePolyfill extends Promise {
  static withResolver() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
}

// node_modules/@inquirer/core/dist/lib/create-prompt.js
var nativeSetImmediate = globalThis.setImmediate;
function getCallSites() {
  const _prepareStackTrace = Error.prepareStackTrace;
  let result = [];
  try {
    Error.prepareStackTrace = (_, callSites) => {
      const callSitesWithoutCurrent = callSites.slice(1);
      result = callSitesWithoutCurrent;
      return callSitesWithoutCurrent;
    };
    new Error().stack;
  } catch {
    return result;
  }
  Error.prepareStackTrace = _prepareStackTrace;
  return result;
}
function createPrompt(view) {
  const callSites = getCallSites();
  const prompt = (config, context = {}) => {
    const { input = process.stdin, signal } = context;
    const cleanups = new Set;
    const output = new import_mute_stream.default;
    output.pipe(context.output ?? process.stdout);
    output.mute();
    const rl = readline2.createInterface({
      terminal: true,
      input,
      output
    });
    const screen = new ScreenManager(rl);
    const { promise, resolve, reject } = PromisePolyfill.withResolver();
    const cancel = () => reject(new CancelPromptError);
    if (signal) {
      const abort = () => reject(new AbortPromptError({ cause: signal.reason }));
      if (signal.aborted) {
        abort();
        return Object.assign(promise, { cancel });
      }
      signal.addEventListener("abort", abort);
      cleanups.add(() => signal.removeEventListener("abort", abort));
    }
    cleanups.add(onExit((code, signal2) => {
      reject(new ExitPromptError(`User force closed the prompt with ${code} ${signal2}`));
    }));
    const sigint = () => reject(new ExitPromptError(`User force closed the prompt with SIGINT`));
    rl.on("SIGINT", sigint);
    cleanups.add(() => rl.removeListener("SIGINT", sigint));
    return withHooks(rl, (cycle) => {
      const hooksCleanup = AsyncResource3.bind(() => effectScheduler.clearAll());
      rl.on("close", hooksCleanup);
      cleanups.add(() => rl.removeListener("close", hooksCleanup));
      const startCycle = () => {
        const checkCursorPos = () => screen.checkCursorPos();
        rl.input.on("keypress", checkCursorPos);
        cleanups.add(() => rl.input.removeListener("keypress", checkCursorPos));
        cycle(() => {
          try {
            const nextView = view(config, (value) => {
              setImmediate(() => resolve(value));
            });
            if (nextView === undefined) {
              const callerFilename = callSites[1]?.getFileName();
              throw new Error(`Prompt functions must return a string.
    at ${callerFilename}`);
            }
            const [content, bottomContent] = typeof nextView === "string" ? [nextView] : nextView;
            screen.render(content, bottomContent);
            effectScheduler.run();
          } catch (error) {
            reject(error);
          }
        });
      };
      if ("readableFlowing" in input) {
        nativeSetImmediate(startCycle);
      } else {
        startCycle();
      }
      return Object.assign(promise.then((answer) => {
        effectScheduler.clearAll();
        return answer;
      }, (error) => {
        effectScheduler.clearAll();
        throw error;
      }).finally(() => {
        cleanups.forEach((cleanup) => cleanup());
        screen.done({ clearContent: Boolean(context.clearPromptOnDone) });
        output.end();
      }).then(() => promise), { cancel });
    });
  };
  return prompt;
}
// node_modules/@inquirer/core/dist/lib/Separator.js
import { styleText as styleText2 } from "node:util";
class Separator {
  separator = styleText2("dim", Array.from({ length: 15 }).join(dist_default.line));
  type = "separator";
  constructor(separator) {
    if (separator) {
      this.separator = separator;
    }
  }
  static isSeparator(choice) {
    return Boolean(choice && typeof choice === "object" && "type" in choice && choice.type === "separator");
  }
}
// node_modules/@inquirer/confirm/dist/index.js
function getBooleanValue(value, defaultValue) {
  let answer = defaultValue !== false;
  if (/^(y|yes)/i.test(value))
    answer = true;
  else if (/^(n|no)/i.test(value))
    answer = false;
  return answer;
}
function boolToString(value) {
  return value ? "Yes" : "No";
}
var dist_default4 = createPrompt((config, done) => {
  const { transformer = boolToString } = config;
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState("");
  const theme2 = makeTheme(config.theme);
  const prefix = usePrefix({ status, theme: theme2 });
  useKeypress((key, rl) => {
    if (status !== "idle")
      return;
    if (isEnterKey(key)) {
      const answer = getBooleanValue(value, config.default);
      setValue(transformer(answer));
      setStatus("done");
      done(answer);
    } else if (isTabKey(key)) {
      const answer = boolToString(!getBooleanValue(value, config.default));
      rl.clearLine(0);
      rl.write(answer);
      setValue(answer);
    } else {
      setValue(rl.line);
    }
  });
  let formattedValue = value;
  let defaultValue = "";
  if (status === "done") {
    formattedValue = theme2.style.answer(value);
  } else {
    defaultValue = ` ${theme2.style.defaultAnswer(config.default === false ? "y/N" : "Y/n")}`;
  }
  const message = theme2.style.message(config.message, status);
  return `${prefix} ${message}${defaultValue} ${formattedValue}`;
});
// node_modules/@inquirer/input/dist/index.js
var inputTheme = {
  validationFailureMode: "keep"
};
var dist_default5 = createPrompt((config, done) => {
  const { prefill = "tab" } = config;
  const theme2 = makeTheme(inputTheme, config.theme);
  const [status, setStatus] = useState("idle");
  const [defaultValue, setDefaultValue] = useState(String(config.default ?? ""));
  const [errorMsg, setError] = useState();
  const [value, setValue] = useState("");
  const prefix = usePrefix({ status, theme: theme2 });
  async function validate(value2) {
    const { required, pattern, patternError = "Invalid input" } = config;
    if (required && !value2) {
      return "You must provide a value";
    }
    if (pattern && !pattern.test(value2)) {
      return patternError;
    }
    if (typeof config.validate === "function") {
      return await config.validate(value2) || "You must provide a valid value";
    }
    return true;
  }
  useKeypress(async (key, rl) => {
    if (status !== "idle") {
      return;
    }
    if (isEnterKey(key)) {
      const answer = value || defaultValue;
      setStatus("loading");
      const isValid = await validate(answer);
      if (isValid === true) {
        setValue(answer);
        setStatus("done");
        done(answer);
      } else {
        if (theme2.validationFailureMode === "clear") {
          setValue("");
        } else {
          rl.write(value);
        }
        setError(isValid);
        setStatus("idle");
      }
    } else if (isBackspaceKey(key) && !value) {
      setDefaultValue("");
    } else if (isTabKey(key) && !value) {
      setDefaultValue("");
      rl.clearLine(0);
      rl.write(defaultValue);
      setValue(defaultValue);
    } else {
      setValue(rl.line);
      setError(undefined);
    }
  });
  useEffect((rl) => {
    if (prefill === "editable" && defaultValue) {
      rl.write(defaultValue);
      setValue(defaultValue);
    }
  }, []);
  const message = theme2.style.message(config.message, status);
  let formattedValue = value;
  if (typeof config.transformer === "function") {
    formattedValue = config.transformer(value, { isFinal: status === "done" });
  } else if (status === "done") {
    formattedValue = theme2.style.answer(value);
  }
  let defaultStr;
  if (defaultValue && status !== "done" && !value) {
    defaultStr = theme2.style.defaultAnswer(defaultValue);
  }
  let error = "";
  if (errorMsg) {
    error = theme2.style.error(errorMsg);
  }
  return [
    [prefix, message, defaultStr, formattedValue].filter((v) => v !== undefined).join(" "),
    error
  ];
});
// node_modules/@inquirer/password/dist/index.js
var passwordTheme = {
  style: {
    maskedText: "[input is masked]"
  }
};
var dist_default6 = createPrompt((config, done) => {
  const { validate = () => true } = config;
  const theme2 = makeTheme(passwordTheme, config.theme);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setError] = useState();
  const [value, setValue] = useState("");
  const prefix = usePrefix({ status, theme: theme2 });
  useKeypress(async (key, rl) => {
    if (status !== "idle") {
      return;
    }
    if (isEnterKey(key)) {
      const answer = value;
      setStatus("loading");
      const isValid = await validate(answer);
      if (isValid === true) {
        setValue(answer);
        setStatus("done");
        done(answer);
      } else {
        rl.write(value);
        setError(isValid || "You must provide a valid value");
        setStatus("idle");
      }
    } else {
      setValue(rl.line);
      setError(undefined);
    }
  });
  const message = theme2.style.message(config.message, status);
  let formattedValue = "";
  let helpTip;
  if (config.mask) {
    const maskChar = typeof config.mask === "string" ? config.mask : "*";
    formattedValue = maskChar.repeat(value.length);
  } else if (status !== "done") {
    helpTip = `${theme2.style.help(theme2.style.maskedText)}${cursorHide}`;
  }
  if (status === "done") {
    formattedValue = theme2.style.answer(formattedValue);
  }
  let error = "";
  if (errorMsg) {
    error = theme2.style.error(errorMsg);
  }
  return [[prefix, message, config.mask ? formattedValue : helpTip].join(" "), error];
});
// node_modules/@inquirer/select/dist/index.js
import { styleText as styleText3 } from "node:util";
var selectTheme = {
  icon: { cursor: dist_default.pointer },
  style: {
    disabled: (text) => styleText3("dim", text),
    description: (text) => styleText3("cyan", text),
    keysHelpTip: (keys) => keys.map(([key, action]) => `${styleText3("bold", key)} ${styleText3("dim", action)}`).join(styleText3("dim", " • "))
  },
  i18n: { disabledError: "This option is disabled and cannot be selected." },
  indexMode: "hidden",
  keybindings: []
};
function isSelectable(item) {
  return !Separator.isSeparator(item) && !item.disabled;
}
function isNavigable(item) {
  return !Separator.isSeparator(item);
}
function normalizeChoices(choices) {
  return choices.map((choice) => {
    if (Separator.isSeparator(choice))
      return choice;
    if (typeof choice !== "object" || choice === null || !("value" in choice)) {
      const name2 = String(choice);
      return {
        value: choice,
        name: name2,
        short: name2,
        disabled: false
      };
    }
    const name = choice.name ?? String(choice.value);
    const normalizedChoice = {
      value: choice.value,
      name,
      short: choice.short ?? name,
      disabled: choice.disabled ?? false
    };
    if (choice.description) {
      normalizedChoice.description = choice.description;
    }
    return normalizedChoice;
  });
}
var dist_default7 = createPrompt((config, done) => {
  const { loop = true, pageSize = 7 } = config;
  const theme2 = makeTheme(selectTheme, config.theme);
  const { keybindings } = theme2;
  const [status, setStatus] = useState("idle");
  const prefix = usePrefix({ status, theme: theme2 });
  const searchTimeoutRef = useRef();
  const searchEnabled = !keybindings.includes("vim");
  const items = useMemo(() => normalizeChoices(config.choices), [config.choices]);
  const bounds = useMemo(() => {
    const first = items.findIndex(isNavigable);
    const last = items.findLastIndex(isNavigable);
    if (first === -1) {
      throw new ValidationError("[select prompt] No selectable choices. All choices are disabled.");
    }
    return { first, last };
  }, [items]);
  const defaultItemIndex = useMemo(() => {
    if (!("default" in config))
      return -1;
    return items.findIndex((item) => isSelectable(item) && item.value === config.default);
  }, [config.default, items]);
  const [active, setActive] = useState(defaultItemIndex === -1 ? bounds.first : defaultItemIndex);
  const selectedChoice = items[active];
  const [errorMsg, setError] = useState();
  useKeypress((key, rl) => {
    clearTimeout(searchTimeoutRef.current);
    if (errorMsg) {
      setError(undefined);
    }
    if (isEnterKey(key)) {
      if (selectedChoice.disabled) {
        setError(theme2.i18n.disabledError);
      } else {
        setStatus("done");
        done(selectedChoice.value);
      }
    } else if (isUpKey(key, keybindings) || isDownKey(key, keybindings)) {
      rl.clearLine(0);
      if (loop || isUpKey(key, keybindings) && active !== bounds.first || isDownKey(key, keybindings) && active !== bounds.last) {
        const offset = isUpKey(key, keybindings) ? -1 : 1;
        let next = active;
        do {
          next = (next + offset + items.length) % items.length;
        } while (!isNavigable(items[next]));
        setActive(next);
      }
    } else if (isNumberKey(key) && !Number.isNaN(Number(rl.line))) {
      const selectedIndex = Number(rl.line) - 1;
      let selectableIndex = -1;
      const position = items.findIndex((item2) => {
        if (Separator.isSeparator(item2))
          return false;
        selectableIndex++;
        return selectableIndex === selectedIndex;
      });
      const item = items[position];
      if (item != null && isSelectable(item)) {
        setActive(position);
      }
      searchTimeoutRef.current = setTimeout(() => {
        rl.clearLine(0);
      }, 700);
    } else if (isBackspaceKey(key)) {
      rl.clearLine(0);
    } else if (searchEnabled) {
      const searchTerm = rl.line.toLowerCase();
      const matchIndex = items.findIndex((item) => {
        if (Separator.isSeparator(item) || !isSelectable(item))
          return false;
        return item.name.toLowerCase().startsWith(searchTerm);
      });
      if (matchIndex !== -1) {
        setActive(matchIndex);
      }
      searchTimeoutRef.current = setTimeout(() => {
        rl.clearLine(0);
      }, 700);
    }
  });
  useEffect(() => () => {
    clearTimeout(searchTimeoutRef.current);
  }, []);
  const message = theme2.style.message(config.message, status);
  const helpLine = theme2.style.keysHelpTip([
    ["↑↓", "navigate"],
    ["⏎", "select"]
  ]);
  let separatorCount = 0;
  const page = usePagination({
    items,
    active,
    renderItem({ item, isActive, index }) {
      if (Separator.isSeparator(item)) {
        separatorCount++;
        return ` ${item.separator}`;
      }
      const cursor = isActive ? theme2.icon.cursor : " ";
      const indexLabel = theme2.indexMode === "number" ? `${index + 1 - separatorCount}. ` : "";
      if (item.disabled) {
        const disabledLabel = typeof item.disabled === "string" ? item.disabled : "(disabled)";
        const disabledCursor = isActive ? theme2.icon.cursor : "-";
        return theme2.style.disabled(`${disabledCursor} ${indexLabel}${item.name} ${disabledLabel}`);
      }
      const color = isActive ? theme2.style.highlight : (x) => x;
      return color(`${cursor} ${indexLabel}${item.name}`);
    },
    pageSize,
    loop
  });
  if (status === "done") {
    return [prefix, message, theme2.style.answer(selectedChoice.short)].filter(Boolean).join(" ");
  }
  const { description } = selectedChoice;
  const lines = [
    [prefix, message].filter(Boolean).join(" "),
    page,
    " ",
    description ? theme2.style.description(description) : "",
    errorMsg ? theme2.style.error(errorMsg) : "",
    helpLine
  ].filter(Boolean).join(`
`).trimEnd();
  return `${lines}${cursorHide}`;
});
// src/ui/wizard.ts
async function promptMcpClient() {
  return await dist_default7({
    message: "Which MCP client are you using?",
    choices: [
      { name: "Antigravity", value: "antigravity" },
      { name: "VSCode", value: "vscode" },
      { name: "Cursor", value: "cursor" },
      { name: "Claude Code", value: "claude-code" },
      { name: "Gemini CLI", value: "gemini-cli" },
      { name: "Codex CLI", value: "codex" },
      { name: "OpenCode", value: "opencode" }
    ]
  });
}
async function promptAuthMode() {
  return await dist_default7({
    message: "Select Authentication Mode:",
    choices: [
      {
        name: "API Key",
        value: "apiKey",
        description: "Persistent keys generated in the Stitch Settings page."
      },
      {
        name: "OAuth",
        value: "oauth",
        description: "A browser-based authentication flow required by specific AI clients that do not support manual key entry, or for environments where storing persistent secrets on disk is restricted."
      }
    ]
  });
}
async function promptApiKeyStorage() {
  return await dist_default7({
    message: "Where would you like to store your API Key?",
    choices: [
      {
        name: ".env file",
        value: ".env",
        description: "Use the current working directory. Append if existing, create if not."
      },
      {
        name: "MCP config",
        value: "config",
        description: "Add it to the final MCP config to copy and paste."
      },
      {
        name: "Skip",
        value: "skip",
        description: "Use a placeholder in the final config."
      }
    ]
  });
}
async function promptApiKey() {
  return await dist_default6({
    message: "Enter your Stitch API Key:",
    mask: "*"
  });
}
async function promptSelect(message, choices) {
  return await dist_default7({ message, choices });
}
async function promptInput(message, defaultValue) {
  return await dist_default5({ message, default: defaultValue });
}
async function promptConfirm(message, defaultValue = true) {
  return await dist_default4({ message, default: defaultValue });
}
async function promptTransportType(authMode = "oauth") {
  const isApiKey = authMode === "apiKey";
  return await dist_default7({
    message: "How would you like to connect to Stitch?",
    choices: [
      {
        name: "Direct (Standard)",
        value: "http",
        description: isApiKey ? "You or the IDE/CLI handles the loading of the API key." : "Standard HTTP. Production-ready. Requires manual OAuth token management."
      },
      {
        name: "Proxy (Recommended for Dev)",
        value: "stdio",
        description: isApiKey ? "stitch-mcp will manage the loading of the API key." : "Zero-config. Uses a local bridge to auto-refresh gcloud credentials."
      }
    ]
  });
}

// src/framework/ConsoleUI.ts
class ConsoleUI {
  async promptMcpClient() {
    return promptMcpClient();
  }
  async promptAuthMode() {
    return promptAuthMode();
  }
  async promptTransportType(authMode) {
    return promptTransportType(authMode);
  }
  async promptApiKeyStorage() {
    return promptApiKeyStorage();
  }
  async promptApiKey() {
    return promptApiKey();
  }
  async promptConfirm(message, defaultYes) {
    return promptConfirm(message, defaultYes);
  }
  log(message) {
    console.log(message);
  }
  warn(message) {
    console.log(theme.yellow(message));
  }
  error(message) {
    console.error(theme.red(message));
  }
  success(message) {
    console.log(theme.green(message));
  }
}

export { getGcloudConfigPath, execCommand, joinPath, GcloudExecutor, GcloudHandler, promptSelect, promptInput, promptConfirm, ConsoleUI };

//# debugId=00C61AAC32145D5C64756E2164756E21
