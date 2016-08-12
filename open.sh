hash tac 2>/dev/null || {
hash tail 2>/dev/null || {
echo >&2 "I require foo but it's not installed.
Aborting."; return 1; }
# have tail, but not tac
tail `wallet file_path` | less;
}

# have tac
tac "`wallet file_path`" | less;
