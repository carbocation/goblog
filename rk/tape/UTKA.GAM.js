function tape_file() {
var file = {
name: "UTKA.GAM",
start: 0x1000,
end: 0x1730,
entry: 0x1000,
image:
"\xCD\x13\x16\xCD\x18\xF8\xCD\x03\xF8\xFE\x0D\xC2\x06\x10\x21\x0A\x00\x22\x9B\x15\x21\x47\x12\xCD\x18\xF8\xCD\x83\x13\xE6\x0F\x21" +
"\xFA\x78\x11\x4E\x00\x19\x3D\xF2\x25\x10\x22\x95\x15\x11\x40\x00\x19\x22\x99\x15\xCD\x83\x13\xE6\x0F\x21\x35\x7F\x85\x6F\x3E\x09" +
"\x77\x23\x3E\x0B\x77\x22\x97\x15\xCD\xCD\x13\xCD\x49\x13\xCA\xC7\x10\x11\x00\x08\xCD\x5B\x13\xCD\x43\x13\xC2\x48\x10\xCD\xCD\x13" +
"\x06\x03\xCD\x64\x13\x11\x40\x02\xCD\x5B\x13\xCD\xA6\x13\xFE\x00\xCA\xA9\x10\x05\xC2\x62\x10\xCD\xCD\x13\xCD\x49\x13\xC2\x60\x10" +
"\x21\x0A\x11\xCD\x18\xF8\x21\x1A\x11\xCD\x18\xF8\x11\xFF\xFF\xCD\x5B\x13\x21\x9B\x15\x35\xC2\x14\x10\x21\x9C\x15\x46\xCD\xEB\x10" +
"\xC3\x06\x10\xFE\x0D\xC2\xA0\x10\x00\xCD\x73\x16\xCD\x18\xF8\x21\x10\x11\xCD\x18\xF8\x11\xFF\xFF\xCD\x5B\x13\x21\x9C\x15\x34\x2B" +
"\x35\xC2\x14\x10\xC3\x99\x10\x21\x0A\x11\xCD\x18\xF8\x21\x27\x11\xCD\x18\xF8\x11\xFF\xFF\xCD\x5B\x13\xC3\x14\x10\x24\x70\x2F\x70" +
"\x72\x24\x00\x00\x00\x02\x14\x12\x1C\x00\x00\xCD\xF0\x13\x21\x0D\x7A\x78\xFE\x0A\xF4\xFB\x10\xC6\x30\x77\xC9\x3E\x31\x77\x23\x78" +
"\xD6\x0A\x00\x00\x00\x77\xC9\x00\x00\x00\x07\x1B\x59\x25\x35\x00\x07\x70\x6F\x70\x61\x6C\x21\x21\x21\x00\x2D\x6D\x61\x7A\x69\x6C" +
"\x61\x2E\x2E\x2E\x20\x20\x00\x07\x6E\x61\x64\x6F\x20\x73\x74\x72\x65\x6C\x71\x74\x78\x21\x07\x07\x07\x00\x1F\x07\x07\x1B\x59\x25" +
"\x26\x2A\x2A\x2A\x20\x70\x72\x61\x77\x69\x6C\x61\x20\x20\x69\x67\x72\x79\x20\x22\x75\x74\x6B\x61\x22\x20\x2A\x2A\x2A\x0D\x0A\x0A" +
"\x20\x20\x20\x20\x20\x20\x77\x20\x6B\x61\x6D\x79\x7B\x61\x68\x20\x73\x69\x64\x69\x74\x20\x6F\x68\x6F\x74\x6E\x69\x6B\x20\x28\x09" +
"\x0B\x29\x0D\x1A\x20\x20\x20\x20\x20\x20\x6E\x61\x64\x20\x6E\x69\x6D\x20\x6C\x65\x74\x71\x74\x20\x75\x74\x6B\x69\x20\x28\x05\x12" +
"\x1C\x29\x2E\x0D\x1A\x20\x20\x20\x20\x20\x20\x6E\x75\x76\x6E\x6F\x20\x70\x6F\x64\x73\x74\x72\x65\x6C\x69\x74\x78\x20\x69\x68\x20" +
"\x70\x6F\x62\x6F\x6C\x78\x7B\x65\x2E\x0D\x1A\x20\x20\x20\x20\x20\x20\x70\x75\x73\x6B\x20\x20\x73\x74\x72\x65\x6C\x79\x20\x2D\x20" +
"\x6E\x61\x76\x61\x74\x69\x65\x20\x6B\x6C\x61\x77\x69\x7B\x69\x20\x22\x70\x72\x6F\x62\x65\x6C\x22\x2E\x0D\x0A\x0A\x20\x20\x20\x20" +
"\x20\x20\x6B\x61\x6B\x2C\x20\x70\x6F\x2D\x77\x61\x7B\x65\x6D\x75\x2C\x20\x77\x79\x20\x73\x74\x72\x65\x6C\x71\x65\x74\x65\x20\x2D" +
"\x20\x6E\x61\x20\x32\x2E\x2E\x2E\x35\x3F\x20\x07\x00\x07\x07\x07\x07\x07\x0D\x0A\x20\x07\x07\x0D\x0A\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x1F\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x20\x7F\x7F\x7F\x7F" +
"\x7F\x7F\x7F\x20\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x0D\x0A\x20\x7F\x7F\x7F\x7F\x7F\x7F\x7F" +
"\x7F\x7F\x7F\x20\x6F\x62\x6C\x61\x6B\x61\x20\x7F\x7F\x7F\x7F\x20\x73\x60\x64\x61\x20\x75\x6C\x65\x74\x61\x60\x74\x20\x73\x74\x72" +
"\x65\x6C\x79\x20\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F" +
"\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x0D" +
"\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x2F\x5C\x5C" +
"\x5C\x5C\x5C\x5C\x2F\x2F\x2F\x2F\x2F\x2F\x2F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F" +
"\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x19\x19\x20\x0D\x20\x20\x6F\x7A\x65\x72\x6F\x20\x73\x20\x75\x74\x6B\x61\x6D\x69" +
"\x20\x0D\x00\xCD\x1B\xF8\xFE\x20\xC9\xC5\xD5\xE5\x2A\x95\x15\xEB\x2A\x99\x15\x7D\xAB\xAC\xAA\xE1\xD1\xC1\xC9\xF5\x1B\x7B\xB2\xC2" +
"\x5C\x13\xF1\xC9\xF5\xE5\xD5\xC5\x2A\x97\x15\x3E\x20\x77\x7C\xFE\x78\xCA\x7E\x13\x11\xB2\xFF\x19\x3E\x0B\x77\x22\x97\x15\xC1\xD1" +
"\xE1\xF1\xC9\xC5\xD5\xE5\x3A\x94\x15\x47\x2A\x93\x15\x7C\xE6\xD5\x37\xEA\x95\x13\x3F\x7D\x17\x6F\x7C\x17\x67\x05\xC2\x8D\x13\x22" +
"\x93\x15\xE1\xD1\xC1\xC9\xC5\xD5\xE5\x00\x06\x03\x2A\x97\x15\xEB\x2A\x95\x15\x7C\xBA\xC2\xC2\x13\x7B\xBD\xC2\xC2\x13\x3E\x00\xC3" +
"\xC9\x13\x23\x05\xC2\xB3\x13\x3E\xFF\xE1\xD1\xC1\xC9\xC5\xD5\xE5\xF5\x2A\x95\x15\x3E\x20\x77\x11\xE4\x10\x06\x04\x13\x23\x1A\x77" +
"\x05\xC2\xDC\x13\x2B\x2B\x2B\x00\x22\x95\x15\xF1\xE1\xD1\xC1\xC9\x21\x33\x14\xCD\x18\xF8\x21\x51\x14\xCD\x18\xF8\x21\x17\x14\x78" +
"\x80\x5F\x16\x00\x19\x5E\x23\x56\xEB\xCD\x18\xF8\x21\x63\x15\xCD\x18\xF8\xC9\x33\x14\x51\x14\x38\x15\x38\x15\x06\x15\x06\x15\xCA" +
"\x14\xCA\x14\xCA\x14\x89\x14\x89\x14\x89\x14\x67\x14\x67\x14\xFF\xFF\xFF\xFF\x1F\x1A\x1A\x1A\x1A\x1A\x1A\x1A\x18\x18\x18\x18\x18" +
"\x18\x18\x18\x18\x18\x18\x18\x18\x18\x18\x18\x18\x18\x18\x18\x18\x00\x69\x74\x6F\x67\x20\x6F\x68\x6F\x74\x79\x3A\x20\x73\x62\x69" +
"\x74\x6F\x20\x2D\x0D\x0A\x00\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x6F\x74\x6C\x69\x7E\x6E\x6F\x20\x77\x73\x65\x20\x75\x74\x6B\x69" +
"\x20\x73\x62\x69\x74\x79\x21\x0D\x00\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x6E\x65\x20\x6F\x7E\x65\x6E\x78\x20\x70\x6C\x6F\x68\x6F" +
"\x2E\x20\x75\x76\x69\x6E\x20\x70\x72\x6F\x6A\x64\x65\x74\x20\x77\x20\x6B\x72\x75\x67\x75\x20\x64\x72\x75\x7A\x65\x6A\x20\x69\x20" +
"\x62\x6C\x69\x7A\x6B\x69\x68\x2E\x0D\x00\x0D\x0A\x20\x20\x20\x20\x0A\x20\x20\x20\x20\x64\x6C\x71\x20\x75\x76\x69\x6E\x61\x20\x6F" +
"\x64\x6E\x6F\x67\x6F\x20\x7E\x65\x6C\x6F\x77\x65\x6B\x61\x20\x69\x20\x73\x6F\x62\x61\x6B\x69\x20\x75\x74\x6F\x6B\x20\x68\x77\x61" +
"\x74\x69\x74\x2E\x0D\x00\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x0A\x77\x61\x6D\x20\x73\x74\x72\x65\x6C\x71\x74\x78\x20\x74\x6F" +
"\x6C\x78\x6B\x6F\x20\x77\x20\x74\x69\x72\x65\x20\x70\x6F\x20\x73\x6C\x6F\x6E\x61\x6D\x2E\x0D\x00\x0D\x0A\x20\x20\x20\x20\x20\x20" +
"\x0A\x20\x20\x73\x74\x72\x65\x6C\x71\x6A\x74\x65\x20\x73\x20\x6F\x74\x6B\x72\x79\x74\x79\x6D\x69\x20\x67\x6C\x61\x7A\x61\x6D\x69" +
"\x2E\x0D\x00\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x70\x72\x6F\x64\x6F\x6C\x76\x69\x6D\x20\x6F\x68\x6F\x74\x75\x3F\x20\x0A\x0D" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22\x77\x6B\x22\x0D\x00\xEF\x9B\x98\x7B\x99\x7B\xAA\x7B\x00\x08\x65\x6B\x61" +
"\x07\x07\x07\x07\x07\x0D\x0A\x20\x20\x20\x20\x20\x20\x0A\x0A\x6E\x61\x7E\x6E\x65\x6D\x20\x6F\x68\x6F\x74\x75\x20\x2D\x20\x22\x77" +
"\x6B\x22\x20\x3F\x20\x07\x07\x07\x00\x07\x07\x07\x07\x07\x07\x20\x7E\x74\x6F\x20\x74\x61\x6B\x20\x73\x6C\x61\x62\x6F\x20\x3F\x20" +
"\x07\x07\x07\x07\x07\x07\x00\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x20\x74\x72\x6F\x65\x7E\x6E\x69\x6B\x2E\x2E\x2E\x00" +
"\x07\x07\x07\x07\x07\x07\x20\x70\x72\x6F\x77\x65\x72\x69\x6D\x21\x21\x21\x00\x21\x3A\x11\xCD\x18\xF8\xCD\x03\xF8\x4F\xD6\x32\xDA" +
"\x19\x16\xFE\x04\xD2\x19\x16\xCD\x09\xF8\x79\xFE\x32\xCA\x49\x16\xFE\x33\xCA\x57\x16\xFE\x35\xCA\x65\x16\x3E\x04\x21\x40\x01\x32" +
"\x53\x10\x22\x66\x10\x21\xA0\x15\xC9\x21\xC9\x15\xCD\x18\xF8\x3E\x0B\x21\x40\x03\xC3\x3F\x16\x21\xE7\x15\xCD\x18\xF8\x3E\x08\x21" +
"\x40\x02\xC3\x3F\x16\x21\x00\x16\xCD\x18\xF8\x3E\x02\x21\x90\x00\xC3\x3F\x16\x21\x13\x17\xCD\x18\xF8\x0E\x18\xCD\x09\xF8\xCD\x21" +
"\xF8\xFE\x0B\xC2\x79\x16\xCD\x1E\xF8\x3E\x19\x84\x32\x08\x17\x3E\x18\x85\x32\x09\x17\x0E\x08\xCD\x09\xF8\xCD\x09\xF8\xCD\x21\xF8" +
"\x32\xFD\x16\x0E\x20\xCD\x09\xF8\xCD\x21\xF8\x32\xFE\x16\xCD\x09\xF8\xCD\x21\xF8\x32\xFF\x16\xCD\x09\xF8\xCD\x21\xF8\x32\x00\x17" +
"\xCD\x09\xF8\xCD\x21\xF8\x32\x01\x17\xCD\x09\xF8\xCD\x21\xF8\x32\x02\x17\xCD\x09\xF8\xCD\x19\x17\x21\xF9\x16\xCD\x18\xF8\x21\x04" +
"\x17\xCD\x18\xF8\xCD\x19\x17\x3A\x08\x17\xFE\x38\xDA\xD8\x16\x21\xF9\x16\xCD\x18\xF8\x21\x0A\x11\xC9\x1B\x59\x38\x59\x20\x02\x0B" +
"\x12\x1C\x00\x00\x07\x08\x1B\x59\x38\x59\x08\x20\x20\x20\x20\x20\x20\x20\x00\x07\x1B\x59\x23\x20\x00\x2A\x08\x17\x7C\xFE\x59\xD2" +
"\x23\x17\x24\x2C\x22\x08\x17\x22\xFB\x16\xC9\x20\x60\x72\x61\x20\x20"};
ui.file_loaded(file);
}
tape_file();