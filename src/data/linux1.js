export const data = [
  {
    "task": "Příkaz pro instalaci balíčku v Debian/Ubuntu je:",
    "options": [
      {"text": "apt install balíček", "isTrue": true},
      {"text": "yum install balíček", "isTrue": false},
      {"text": "install balíček", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro aktualizaci seznamu balíčků v Debian/Ubuntu je:",
    "options": [
      {"text": "apt update", "isTrue": true},
      {"text": "apt upgrade", "isTrue": false},
      {"text": "update", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro aktualizaci všech balíčků v Debian/Ubuntu je:",
    "options": [
      {"text": "apt upgrade", "isTrue": true},
      {"text": "apt update", "isTrue": false},
      {"text": "upgrade all", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro odstranění balíčku v Debian/Ubuntu je:",
    "options": [
      {"text": "apt remove balíček", "isTrue": true},
      {"text": "apt delete balíček", "isTrue": false},
      {"text": "remove balíček", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro instalaci balíčku v RedHat/CentOS je:",
    "options": [
      {"text": "yum install balíček", "isTrue": true},
      {"text": "apt install balíček", "isTrue": false},
      {"text": "dnf install balíček", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vyhledání balíčku v repozitáři je:",
    "options": [
      {"text": "apt search balíček", "isTrue": true},
      {"text": "apt find balíček", "isTrue": false},
      {"text": "search balíček", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení informací o balíčku je:",
    "options": [
      {"text": "apt show balíček", "isTrue": true},
      {"text": "apt info balíček", "isTrue": false},
      {"text": "info balíček", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení nainstalovaných balíčků je:",
    "options": [
      {"text": "dpkg -l", "isTrue": true},
      {"text": "apt list", "isTrue": false},
      {"text": "list packages", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro spuštění služby v systemd je:",
    "options": [
      {"text": "systemctl start služba", "isTrue": true},
      {"text": "service služba start", "isTrue": false},
      {"text": "start služba", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zastavení služby v systemd je:",
    "options": [
      {"text": "systemctl stop služba", "isTrue": true},
      {"text": "service služba stop", "isTrue": false},
      {"text": "stop služba", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro restart služby v systemd je:",
    "options": [
      {"text": "systemctl restart služba", "isTrue": true},
      {"text": "service služba restart", "isTrue": false},
      {"text": "restart služba", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení stavu služby v systemd je:",
    "options": [
      {"text": "systemctl status služba", "isTrue": true},
      {"text": "service služba status", "isTrue": false},
      {"text": "status služba", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro povolení automatického startu služby při bootu je:",
    "options": [
      {"text": "systemctl enable služba", "isTrue": true},
      {"text": "systemctl autostart služba", "isTrue": false},
      {"text": "enable služba", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zakázání automatického startu služby je:",
    "options": [
      {"text": "systemctl disable služba", "isTrue": true},
      {"text": "systemctl nostart služba", "isTrue": false},
      {"text": "disable služba", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení všech služeb je:",
    "options": [
      {"text": "systemctl list-units --type=service", "isTrue": true},
      {"text": "systemctl list-services", "isTrue": false},
      {"text": "list services", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přesměrování výstupu do souboru (přepis) je:",
    "options": [
      {"text": "příkaz > soubor", "isTrue": true},
      {"text": "příkaz >> soubor", "isTrue": false},
      {"text": "příkaz | soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přesměrování výstupu do souboru (připojení) je:",
    "options": [
      {"text": "příkaz >> soubor", "isTrue": true},
      {"text": "příkaz > soubor", "isTrue": false},
      {"text": "příkaz | soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro propojení výstupu jednoho příkazu se vstupem druhého je:",
    "options": [
      {"text": "příkaz1 | příkaz2", "isTrue": true},
      {"text": "příkaz1 > příkaz2", "isTrue": false},
      {"text": "příkaz1 >> příkaz2", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přesměrování chybového výstupu do souboru je:",
    "options": [
      {"text": "příkaz 2> soubor", "isTrue": true},
      {"text": "příkaz error> soubor", "isTrue": false},
      {"text": "příkaz err> soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přesměrování stdout i stderr do souboru je:",
    "options": [
      {"text": "příkaz &> soubor", "isTrue": true},
      {"text": "příkaz > soubor 2>&1", "isTrue": false},
      {"text": "příkaz >> soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro počítání řádků, slov a znaků je:",
    "options": [
      {"text": "wc", "isTrue": true},
      {"text": "count", "isTrue": false},
      {"text": "lines", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro počítání pouze řádků je:",
    "options": [
      {"text": "wc -l", "isTrue": true},
      {"text": "count -l", "isTrue": false},
      {"text": "lines", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro seřazení řádků v souboru je:",
    "options": [
      {"text": "sort", "isTrue": true},
      {"text": "order", "isTrue": false},
      {"text": "arrange", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro odstranění duplicitních řádků je:",
    "options": [
      {"text": "uniq", "isTrue": true},
      {"text": "unique", "isTrue": false},
      {"text": "nodup", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení rozdílů mezi dvěma soubory je:",
    "options": [
      {"text": "diff soubor1 soubor2", "isTrue": true},
      {"text": "compare soubor1 soubor2", "isTrue": false},
      {"text": "difference soubor1 soubor2", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro výběr konkrétních sloupců z výstupu je:",
    "options": [
      {"text": "awk", "isTrue": true},
      {"text": "cut", "isTrue": false},
      {"text": "select", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro nahrazení textu v souboru je:",
    "options": [
      {"text": "sed", "isTrue": true},
      {"text": "replace", "isTrue": false},
      {"text": "substitute", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení typu souboru je:",
    "options": [
      {"text": "file soubor", "isTrue": true},
      {"text": "type soubor", "isTrue": false},
      {"text": "filetype soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření prázdného souboru je:",
    "options": [
      {"text": "touch soubor", "isTrue": true},
      {"text": "create soubor", "isTrue": false},
      {"text": "new soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro změnu časového razítka souboru je:",
    "options": [
      {"text": "touch soubor", "isTrue": true},
      {"text": "timestamp soubor", "isTrue": false},
      {"text": "time soubor", "isTrue": false}
    ]
  },
  {
    "task": "Aktuální adresář reprezentuje:",
    "options": [
      {"text": ".", "isTrue": true},
      {"text": "./", "isTrue": false},
      {"text": "~", "isTrue": false}
    ]
  },
  {
    "task": "Nadřazený adresář reprezentuje:",
    "options": [
      {"text": "..", "isTrue": true},
      {"text": "../", "isTrue": false},
      {"text": "-", "isTrue": false}
    ]
  },
  {
    "task": "Domovský adresář aktuálního uživatele reprezentuje:",
    "options": [
      {"text": "~", "isTrue": true},
      {"text": "$HOME", "isTrue": false},
      {"text": "/home", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přechod do domovského adresáře je:",
    "options": [
      {"text": "cd", "isTrue": true},
      {"text": "cd ~", "isTrue": false},
      {"text": "home", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přechod do předchozího adresáře je:",
    "options": [
      {"text": "cd -", "isTrue": true},
      {"text": "cd ..", "isTrue": false},
      {"text": "back", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení aktuálního adresáře je:",
    "options": [
      {"text": "pwd", "isTrue": true},
      {"text": "cwd", "isTrue": false},
      {"text": "where", "isTrue": false}
    ]
  },
  {
    "task": "Znak pro zástupný znak (jeden libovolný znak) je:",
    "options": [
      {"text": "?", "isTrue": true},
      {"text": "*", "isTrue": false},
      {"text": ".", "isTrue": false}
    ]
  },
  {
    "task": "Znak pro zástupný znak (libovolný počet znaků) je:",
    "options": [
      {"text": "*", "isTrue": true},
      {"text": "?", "isTrue": false},
      {"text": "%", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení stromu adresářů je:",
    "options": [
      {"text": "tree", "isTrue": true},
      {"text": "ls -R", "isTrue": false},
      {"text": "dir tree", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zjištění cesty ke spustitelnému souboru je:",
    "options": [
      {"text": "which příkaz", "isTrue": true},
      {"text": "whereis příkaz", "isTrue": false},
      {"text": "find příkaz", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zjištění všech cest k programu je:",
    "options": [
      {"text": "whereis příkaz", "isTrue": true},
      {"text": "which příkaz", "isTrue": false},
      {"text": "locate příkaz", "isTrue": false}
    ]
  },
  {
    "task": "Proměnná prostředí s cestami ke spustitelným souborům je:",
    "options": [
      {"text": "PATH", "isTrue": true},
      {"text": "PATHS", "isTrue": false},
      {"text": "BINPATH", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení všech proměnných prostředí je:",
    "options": [
      {"text": "env", "isTrue": true},
      {"text": "printenv", "isTrue": false},
      {"text": "variables", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro nastavení proměnné prostředí je:",
    "options": [
      {"text": "export JMÉNO=hodnota", "isTrue": true},
      {"text": "set JMÉNO=hodnota", "isTrue": false},
      {"text": "JMÉNO=hodnota", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení hodnoty proměnné je:",
    "options": [
      {"text": "echo $JMÉNO", "isTrue": true},
      {"text": "print $JMÉNO", "isTrue": false},
      {"text": "show $JMÉNO", "isTrue": false}
    ]
  },
  {
    "task": "Soubor načítaný při přihlášení bash shellu je:",
    "options": [
      {"text": "~/.bash_profile", "isTrue": true},
      {"text": "~/.bashrc", "isTrue": false},
      {"text": "~/.profile", "isTrue": false}
    ]
  },
  {
    "task": "Soubor načítaný při každém spuštění bash shellu je:",
    "options": [
      {"text": "~/.bashrc", "isTrue": true},
      {"text": "~/.bash_profile", "isTrue": false},
      {"text": "~/.bash_login", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro změnu výchozího shellu uživatele je:",
    "options": [
      {"text": "chsh", "isTrue": true},
      {"text": "changeshell", "isTrue": false},
      {"text": "setshell", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení manuálové stránky je:",
    "options": [
      {"text": "man příkaz", "isTrue": true},
      {"text": "help příkaz", "isTrue": false},
      {"text": "manual příkaz", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení krátké nápovědy je:",
    "options": [
      {"text": "příkaz --help", "isTrue": true},
      {"text": "help příkaz", "isTrue": false},
      {"text": "příkaz -h", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení informací o příkazu je:",
    "options": [
      {"text": "info příkaz", "isTrue": true},
      {"text": "man příkaz", "isTrue": false},
      {"text": "about příkaz", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro restart systému je:",
    "options": [
      {"text": "reboot", "isTrue": true},
      {"text": "shutdown -r now", "isTrue": false},
      {"text": "systemctl reboot", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vypnutí systému je:",
    "options": [
      {"text": "shutdown now", "isTrue": true},
      {"text": "poweroff", "isTrue": false},
      {"text": "halt", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro naplánované vypnutí za 10 minut je:",
    "options": [
      {"text": "shutdown +10", "isTrue": true},
      {"text": "shutdown 10", "isTrue": false},
      {"text": "poweroff +10", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zrušení naplánovaného vypnutí je:",
    "options": [
      {"text": "shutdown -c", "isTrue": true},
      {"text": "shutdown cancel", "isTrue": false},
      {"text": "cancel shutdown", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření souborového systému ext4 je:",
    "options": [
      {"text": "mkfs.ext4 /dev/sdX", "isTrue": true},
      {"text": "mkfs -t ext4 /dev/sdX", "isTrue": false},
      {"text": "format ext4 /dev/sdX", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro kontrolu souborového systému je:",
    "options": [
      {"text": "fsck /dev/sdX", "isTrue": true},
      {"text": "checkfs /dev/sdX", "isTrue": false},
      {"text": "verify /dev/sdX", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení UUID disku je:",
    "options": [
      {"text": "blkid", "isTrue": true},
      {"text": "lsblk", "isTrue": false},
      {"text": "diskid", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení blokovýchzařízení je:",
    "options": [
      {"text": "lsblk", "isTrue": true},
      {"text": "blkid", "isTrue": false},
      {"text": "listdisk", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření swap oblasti je:",
    "options": [
      {"text": "mkswap /dev/sdX", "isTrue": true},
      {"text": "makeswap /dev/sdX", "isTrue": false},
      {"text": "createswap /dev/sdX", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro aktivaci swap oblasti je:",
    "options": [
      {"text": "swapon /dev/sdX", "isTrue": true},
      {"text": "swap on /dev/sdX", "isTrue": false},
      {"text": "enable swap /dev/sdX", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro deaktivaci swap oblasti je:",
    "options": [
      {"text": "swapoff /dev/sdX", "isTrue": true},
      {"text": "swap off /dev/sdX", "isTrue": false},
      {"text": "disable swap /dev/sdX", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení aktuálního data a času je:",
    "options": [
      {"text": "date", "isTrue": true},
      {"text": "time", "isTrue": false},
      {"text": "datetime", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro nastavení data a času je:",
    "options": [
      {"text": "date -s 'YYYY-MM-DD HH:MM:SS'", "isTrue": true},
      {"text": "setdate 'YYYY-MM-DD HH:MM:SS'", "isTrue": false},
      {"text": "time set 'YYYY-MM-DD HH:MM:SS'", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro synchronizaci času přes NTP je:",
    "options": [
      {"text": "ntpdate server", "isTrue": true},
      {"text": "timedatectl set-ntp true", "isTrue": false},
      {"text": "ntp sync", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení kalendáře je:",
    "options": [
      {"text": "cal", "isTrue": true},
      {"text": "calendar", "isTrue": false},
      {"text": "date -cal", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vyhledání souborů změněných za posledních 7 dní je:",
    "options": [
      {"text": "find . -mtime -7", "isTrue": true},
      {"text": "find . -days 7", "isTrue": false},
      {"text": "find . -modified 7", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vyhledání souborů větších než 100MB je:",
    "options": [
      {"text": "find . -size +100M", "isTrue": true},
      {"text": "find . -bigger 100M", "isTrue": false},
      {"text": "find . -large 100M", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vyhledání a smazání souborů je:",
    "options": [
      {"text": "find . -name '*.tmp' -delete", "isTrue": true},
      {"text": "find . -name '*.tmp' | rm", "isTrue": false},
      {"text": "find . -delete '*.tmp'", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření checksumu MD5 je:",
    "options": [
      {"text": "md5sum soubor", "isTrue": true},
      {"text": "md5 soubor", "isTrue": false},
      {"text": "checksum md5 soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření checksumu SHA256 je:",
    "options": [
      {"text": "sha256sum soubor", "isTrue": true},
      {"text": "sha256 soubor", "isTrue": false},
      {"text": "checksum sha256 soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření nového adresáře je:",
    "options": [
      {"text": "mkdir", "isTrue": true},
      {"text": "mkd", "isTrue": false},
      {"text": "createdir", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro změnu vlastníka souboru je:",
    "options": [
      {"text": "chown", "isTrue": true},
      {"text": "chmod", "isTrue": false},
      {"text": "chgrp", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro změnu skupiny souboru je:",
    "options": [
      {"text": "chgrp", "isTrue": true},
      {"text": "chown", "isTrue": false},
      {"text": "chmod", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro změnu oprávnění souboru je:",
    "options": [
      {"text": "chmod", "isTrue": true},
      {"text": "chown", "isTrue": false},
      {"text": "chgrp", "isTrue": false}
    ]
  },
  {
    "task": "Oprávnění rwxr-xr-- v oktalovém zápisu je:",
    "options": [
      {"text": "754", "isTrue": true},
      {"text": "644", "isTrue": false},
      {"text": "755", "isTrue": false}
    ]
  },
  {
    "task": "Oprávnění 644 znamená:",
    "options": [
      {"text": "rw-r--r--", "isTrue": true},
      {"text": "rwxr-xr-x", "isTrue": false},
      {"text": "rw-rw-r--", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření hardlinku je:",
    "options": [
      {"text": "ln soubor link", "isTrue": true},
      {"text": "ln -s soubor link", "isTrue": false},
      {"text": "link soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření symbolického linku je:",
    "options": [
      {"text": "ln -s soubor link", "isTrue": true},
      {"text": "ln soubor link", "isTrue": false},
      {"text": "symlink soubor link", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro kopírování souborů je:",
    "options": [
      {"text": "cp", "isTrue": true},
      {"text": "copy", "isTrue": false},
      {"text": "mv", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přesun/přejmenování souborů je:",
    "options": [
      {"text": "mv", "isTrue": true},
      {"text": "move", "isTrue": false},
      {"text": "rename", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro rekurzivní kopírování adresáře je:",
    "options": [
      {"text": "cp -r", "isTrue": true},
      {"text": "cp", "isTrue": false},
      {"text": "copy -r", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro smazání souboru je:",
    "options": [
      {"text": "rm", "isTrue": true},
      {"text": "del", "isTrue": false},
      {"text": "delete", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro rekurzivní smazání adresáře je:",
    "options": [
      {"text": "rm -r", "isTrue": true},
      {"text": "rmdir", "isTrue": false},
      {"text": "delete -r", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení obsahu souboru je:",
    "options": [
      {"text": "cat", "isTrue": true},
      {"text": "show", "isTrue": false},
      {"text": "display", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro stránkování výstupu je:",
    "options": [
      {"text": "less", "isTrue": true},
      {"text": "cat", "isTrue": false},
      {"text": "show", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení prvních 10 řádků souboru je:",
    "options": [
      {"text": "head", "isTrue": true},
      {"text": "top", "isTrue": false},
      {"text": "first", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení posledních 10 řádků souboru je:",
    "options": [
      {"text": "tail", "isTrue": true},
      {"text": "end", "isTrue": false},
      {"text": "last", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vyhledávání textu v souboru je:",
    "options": [
      {"text": "grep", "isTrue": true},
      {"text": "find", "isTrue": false},
      {"text": "search", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vyhledávání souborů v adresářové struktuře je:",
    "options": [
      {"text": "find", "isTrue": true},
      {"text": "search", "isTrue": false},
      {"text": "locate", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro rychlé vyhledávání souborů v databázi je:",
    "options": [
      {"text": "locate", "isTrue": true},
      {"text": "find", "isTrue": false},
      {"text": "search", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření nového uživatele je:",
    "options": [
      {"text": "useradd", "isTrue": true},
      {"text": "adduser", "isTrue": false},
      {"text": "createuser", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro smazání uživatele je:",
    "options": [
      {"text": "userdel", "isTrue": true},
      {"text": "deluser", "isTrue": false},
      {"text": "removeuser", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro změnu hesla uživatele je:",
    "options": [
      {"text": "passwd", "isTrue": true},
      {"text": "password", "isTrue": false},
      {"text": "chpasswd", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro modifikaci uživatelského účtu je:",
    "options": [
      {"text": "usermod", "isTrue": true},
      {"text": "moduser", "isTrue": false},
      {"text": "changeuser", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření nové skupiny je:",
    "options": [
      {"text": "groupadd", "isTrue": true},
      {"text": "addgroup", "isTrue": false},
      {"text": "creategroup", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přidání uživatele do skupiny je:",
    "options": [
      {"text": "usermod -aG skupina uživatel", "isTrue": true},
      {"text": "addgroup uživatel skupina", "isTrue": false},
      {"text": "groupadd uživatel skupina", "isTrue": false}
    ]
  },
  {
    "task": "Soubor s informacemi o uživatelích je:",
    "options": [
      {"text": "/etc/passwd", "isTrue": true},
      {"text": "/etc/users", "isTrue": false},
      {"text": "/var/users", "isTrue": false}
    ]
  },
  {
    "task": "Soubor s hesly uživatelů (šifrovanými) je:",
    "options": [
      {"text": "/etc/shadow", "isTrue": true},
      {"text": "/etc/passwd", "isTrue": false},
      {"text": "/etc/passwords", "isTrue": false}
    ]
  },
  {
    "task": "Soubor s informacemi o skupinách je:",
    "options": [
      {"text": "/etc/group", "isTrue": true},
      {"text": "/etc/groups", "isTrue": false},
      {"text": "/var/group", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení aktuálního umasku je:",
    "options": [
      {"text": "umask", "isTrue": true},
      {"text": "showumask", "isTrue": false},
      {"text": "getumask", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro nastavení umasku na 0022 je:",
    "options": [
      {"text": "umask 0022", "isTrue": true},
      {"text": "umask 022", "isTrue": false},
      {"text": "setumask 0022", "isTrue": false}
    ]
  },
  {
    "task": "Umask 0077 znamená:",
    "options": [
      {"text": "žádná oprávnění pro skupinu a ostatní", "isTrue": true},
      {"text": "plná oprávnění pro všechny", "isTrue": false},
      {"text": "pouze čtení pro skupinu a ostatní", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení běžících procesů je:",
    "options": [
      {"text": "ps", "isTrue": true},
      {"text": "proc", "isTrue": false},
      {"text": "process", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení všech procesů včetně démonů je:",
    "options": [
      {"text": "ps aux", "isTrue": true},
      {"text": "ps -a", "isTrue": false},
      {"text": "ps all", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení procesů s hierarchií (stromová struktura) je:",
    "options": [
      {"text": "ps auxf", "isTrue": true},
      {"text": "pstree", "isTrue": false},
      {"text": "ps -tree", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro ukončení procesu podle PID je:",
    "options": [
      {"text": "kill PID", "isTrue": true},
      {"text": "stop PID", "isTrue": false},
      {"text": "end PID", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro násilné ukončení procesu je:",
    "options": [
      {"text": "kill -9 PID", "isTrue": true},
      {"text": "kill -KILL PID", "isTrue": false},
      {"text": "killall -9 proces", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro ukončení procesů podle jména je:",
    "options": [
      {"text": "killall název", "isTrue": true},
      {"text": "kill název", "isTrue": false},
      {"text": "pkill -9 název", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení procesů v reálném čase je:",
    "options": [
      {"text": "top", "isTrue": true},
      {"text": "htop", "isTrue": false},
      {"text": "ps -real", "isTrue": false}
    ]
  },
  {
    "task": "Klávesová zkratka pro spuštění procesu na pozadí v shellu je:",
    "options": [
      {"text": "příkaz &", "isTrue": true},
      {"text": "bg příkaz", "isTrue": false},
      {"text": "příkaz -bg", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přepnutí pozastaveného procesu na pozadí je:",
    "options": [
      {"text": "bg", "isTrue": true},
      {"text": "background", "isTrue": false},
      {"text": "continue &", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro přepnutí procesu z pozadí do popředí je:",
    "options": [
      {"text": "fg", "isTrue": true},
      {"text": "foreground", "isTrue": false},
      {"text": "front", "isTrue": false}
    ]
  },
  {
    "task": "Klávesová zkratka pro pozastavení procesu je:",
    "options": [
      {"text": "Ctrl+Z", "isTrue": true},
      {"text": "Ctrl+C", "isTrue": false},
      {"text": "Ctrl+D", "isTrue": false}
    ]
  },
  {
    "task": "Klávesová zkratka pro ukončení procesu je:",
    "options": [
      {"text": "Ctrl+C", "isTrue": true},
      {"text": "Ctrl+Z", "isTrue": false},
      {"text": "Ctrl+X", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení seznamu úloh v aktuálním shellu je:",
    "options": [
      {"text": "jobs", "isTrue": true},
      {"text": "tasks", "isTrue": false},
      {"text": "list", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro rozbalení tar.gz archivu je:",
    "options": [
      {"text": "tar -xzf archiv.tar.gz", "isTrue": true},
      {"text": "untar archiv.tar.gz", "isTrue": false},
      {"text": "extract archiv.tar.gz", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření tar.gz archivu je:",
    "options": [
      {"text": "tar -czf archiv.tar.gz soubory/", "isTrue": true},
      {"text": "tar -c archiv.tar.gz soubory/", "isTrue": false},
      {"text": "compress soubory/ archiv.tar.gz", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro rozbalení zip archivu je:",
    "options": [
      {"text": "unzip archiv.zip", "isTrue": true},
      {"text": "zip -x archiv.zip", "isTrue": false},
      {"text": "extract archiv.zip", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření zip archivu je:",
    "options": [
      {"text": "zip -r archiv.zip soubory/", "isTrue": true},
      {"text": "zip archiv.zip soubory/", "isTrue": false},
      {"text": "compress soubory/ archiv.zip", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro kompresi souboru pomocí gzip je:",
    "options": [
      {"text": "gzip soubor", "isTrue": true},
      {"text": "compress soubor", "isTrue": false},
      {"text": "zip soubor", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro dekompresi gzip souboru je:",
    "options": [
      {"text": "gunzip soubor.gz", "isTrue": true},
      {"text": "gzip -d soubor.gz", "isTrue": false},
      {"text": "ungzip soubor.gz", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zjištění IP adresy systému je:",
    "options": [
      {"text": "ip addr", "isTrue": true},
      {"text": "ifconfig", "isTrue": false},
      {"text": "ipconfig", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro otestování konektivity na jiný host je:",
    "options": [
      {"text": "ping host", "isTrue": true},
      {"text": "test host", "isTrue": false},
      {"text": "connect host", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení síťových připojení a portů je:",
    "options": [
      {"text": "netstat", "isTrue": true},
      {"text": "ss", "isTrue": false},
      {"text": "connections", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení směrovací tabulky je:",
    "options": [
      {"text": "ip route", "isTrue": true},
      {"text": "route -n", "isTrue": false},
      {"text": "netstat -r", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro test DNS překladu je:",
    "options": [
      {"text": "nslookup doména", "isTrue": true},
      {"text": "dig doména", "isTrue": false},
      {"text": "host doména", "isTrue": false}
    ]
  },
  {
    "task": "Konfiguračí soubor pro síťová rozhraní v Debianu je:",
    "options": [
      {"text": "/etc/network/interfaces", "isTrue": true},
      {"text": "/etc/sysconfig/network-scripts/", "isTrue": false},
      {"text": "/etc/netplan/", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro restart síťové služby v systemd je:",
    "options": [
      {"text": "systemctl restart network", "isTrue": true},
      {"text": "service network restart", "isTrue": false},
      {"text": "/etc/init.d/network restart", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení historie příkazů je:",
    "options": [
      {"text": "history", "isTrue": true},
      {"text": "hist", "isTrue": false},
      {"text": "commands", "isTrue": false}
    ]
  },
  {
    "task": "Soubor s historií příkazů bash shellu je:",
    "options": [
      {"text": "~/.bash_history", "isTrue": true},
      {"text": "~/.history", "isTrue": false},
      {"text": "/var/log/bash_history", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro vytvoření aliasu je:",
    "options": [
      {"text": "alias jméno='příkaz'", "isTrue": true},
      {"text": "setalias jméno příkaz", "isTrue": false},
      {"text": "newalias jméno příkaz", "isTrue": false}
    ]
  },
  {
    "task": "Soubor pro trvalé aliasy v bash je:",
    "options": [
      {"text": "~/.bashrc", "isTrue": true},
      {"text": "~/.bash_profile", "isTrue": false},
      {"text": "~/.aliases", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení všech aliasů je:",
    "options": [
      {"text": "alias", "isTrue": true},
      {"text": "list aliases", "isTrue": false},
      {"text": "show aliases", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro odstranění aliasu je:",
    "options": [
      {"text": "unalias jméno", "isTrue": true},
      {"text": "dealias jméno", "isTrue": false},
      {"text": "removealias jméno", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro spuštění příkazu v určitém čase pomocí at je:",
    "options": [
      {"text": "at čas", "isTrue": true},
      {"text": "schedule čas", "isTrue": false},
      {"text": "run čas", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení naplánovaných at úloh je:",
    "options": [
      {"text": "atq", "isTrue": true},
      {"text": "at -l", "isTrue": false},
      {"text": "list at", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro odstranění at úlohy je:",
    "options": [
      {"text": "atrm číslo_úlohy", "isTrue": true},
      {"text": "at -d číslo_úlohy", "isTrue": false},
      {"text": "delete at číslo_úlohy", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro editaci crontabu je:",
    "options": [
      {"text": "crontab -e", "isTrue": true},
      {"text": "edit crontab", "isTrue": false},
      {"text": "vi /etc/crontab", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení crontabu je:",
    "options": [
      {"text": "crontab -l", "isTrue": true},
      {"text": "crontab -show", "isTrue": false},
      {"text": "list crontab", "isTrue": false}
    ]
  },
  {
    "task": "V crontabu zápis '0 * * * *' znamená:",
    "options": [
      {"text": "každou hodinu v 0. minutě", "isTrue": true},
      {"text": "každou minutu", "isTrue": false},
      {"text": "o půlnoci", "isTrue": false}
    ]
  },
  {
    "task": "V crontabu zápis '*/5 * * * *' znamená:",
    "options": [
      {"text": "každých 5 minut", "isTrue": true},
      {"text": "5x za hodinu", "isTrue": false},
      {"text": "v 5. minutě každé hodiny", "isTrue": false}
    ]
  },
  {
    "task": "V crontabu zápis '0 0 * * 1' znamená:",
    "options": [
      {"text": "každé pondělí o půlnoci", "isTrue": true},
      {"text": "každý první den v měsíci", "isTrue": false},
      {"text": "každou hodinu v pondělí", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení využití disku je:",
    "options": [
      {"text": "df -h", "isTrue": true},
      {"text": "disk", "isTrue": false},
      {"text": "diskspace", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení velikosti adresáře je:",
    "options": [
      {"text": "du -sh adresář", "isTrue": true},
      {"text": "size adresář", "isTrue": false},
      {"text": "ls -size adresář", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení připojených souborových systémů je:",
    "options": [
      {"text": "mount", "isTrue": true},
      {"text": "showmount", "isTrue": false},
      {"text": "listmount", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro připojení souborového systému je:",
    "options": [
      {"text": "mount /dev/sda1 /mnt", "isTrue": true},
      {"text": "attach /dev/sda1 /mnt", "isTrue": false},
      {"text": "connect /dev/sda1 /mnt", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro odpojení souborového systému je:",
    "options": [
      {"text": "umount /mnt", "isTrue": true},
      {"text": "unmount /mnt", "isTrue": false},
      {"text": "detach /mnt", "isTrue": false}
    ]
  },
  {
    "task": "Soubor s definicemi souborových systémů pro automatické připojení je:",
    "options": [
      {"text": "/etc/fstab", "isTrue": true},
      {"text": "/etc/mount", "isTrue": false},
      {"text": "/etc/filesystems", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení informací o systému je:",
    "options": [
      {"text": "uname -a", "isTrue": true},
      {"text": "sysinfo", "isTrue": false},
      {"text": "systeminfo", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení verze jádra je:",
    "options": [
      {"text": "uname -r", "isTrue": true},
      {"text": "kernel -v", "isTrue": false},
      {"text": "version", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení doby běhu systému je:",
    "options": [
      {"text": "uptime", "isTrue": true},
      {"text": "runtime", "isTrue": false},
      {"text": "systemtime", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení přihlášených uživatelů je:",
    "options": [
      {"text": "who", "isTrue": true},
      {"text": "users", "isTrue": false},
      {"text": "logged", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení aktuálního uživatele je:",
    "options": [
      {"text": "whoami", "isTrue": true},
      {"text": "who am i", "isTrue": false},
      {"text": "currentuser", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro změnu uživatele je:",
    "options": [
      {"text": "su uživatel", "isTrue": true},
      {"text": "switch uživatel", "isTrue": false},
      {"text": "changeuser uživatel", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro spuštění příkazu jako jiný uživatel je:",
    "options": [
      {"text": "sudo příkaz", "isTrue": true},
      {"text": "su -c příkaz", "isTrue": false},
      {"text": "runas příkaz", "isTrue": false}
    ]
  },
  {
    "task": "Soubor s konfigurací sudo je:",
    "options": [
      {"text": "/etc/sudoers", "isTrue": true},
      {"text": "/etc/sudo.conf", "isTrue": false},
      {"text": "/etc/sudo/config", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro bezpečnou editaci sudoers je:",
    "options": [
      {"text": "visudo", "isTrue": true},
      {"text": "edit sudoers", "isTrue": false},
      {"text": "vi /etc/sudoers", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení systémových logů pomocí systemd je:",
    "options": [
      {"text": "journalctl", "isTrue": true},
      {"text": "systemlog", "isTrue": false},
      {"text": "logs", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení logů od posledního bootu je:",
    "options": [
      {"text": "journalctl -b", "isTrue": true},
      {"text": "journalctl --boot", "isTrue": false},
      {"text": "logs -boot", "isTrue": false}
    ]
  },
  {
    "task": "Adresář se systémovými logy je:",
    "options": [
      {"text": "/var/log/", "isTrue": true},
      {"text": "/var/logs/", "isTrue": false},
      {"text": "/etc/log/", "isTrue": false}
    ]
  },
  {
    "task": "Příkaz pro zobrazení volné a použité paměti je:",
    "options": [
      {"text": "free -h", "isTrue": true},
      {"text": "memory", "isTrue": false},
      {"text": "showmem", "isTrue": false}
    ]
  }]