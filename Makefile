# ==============================================================================
#                      SAUDI GAZETTE PRODUCTION MAKEFILE
# ==============================================================================
# This Makefile provides robust, easy-to-use commands for cleaning, installing,
# compiling, and running the optimized production bundle with zero unused bloat.
# ==============================================================================

.PHONY: all install prune build run clean lint help

# Default target: installs, checks types, optimizes assets, and compiles the bundle
all: install lint prune build
	@echo "\n\033[32m✔ Project built, optimized, and ready to be served! Run 'make run' to launch.\033[0m\n"

# Install dependencies and required TypeScript modules
install:
	@echo "\033[34m▶ Installing dependencies and type definitions...\033[0m"
	npm install
	@echo "\033[32m✔ Dependencies successfully synchronized!\033[0m"

# Perform static type checking using TypeScript
lint:
	@echo "\033[34m▶ Running static type analysis (tsc --noEmit)...\033[0m"
	npm run lint
	@echo "\033[32m✔ No type checking issues found!\033[0m"

# Dry run / execute asset optimization and purge unused assets
prune:
	@echo "\033[34m▶ Pruning unused files & static assets to reduce bundlesize to absolute minimum...\033[0m"
	npm run pruning

# Compile the application using Vite
build:
	@echo "\033[34m▶ Building production assets...\033[0m"
	npm run build
	@echo "\033[32m✔ Production compilation complete! Results saved in dist/.\033[0m"

# Launch local server and automatically open the application in the system's browser
run:
	@echo "\033[34m▶ Launching local Express server and opening your default browser...\033[0m"
	npm run start:local

# Clean all build outputs and cached folders
clean:
	@echo "\033[34m▶ Cleaning build outputs...\033[0m"
	npm run clean
	@echo "\033[32m✔ Temp and build directories successfully wiped clean!\033[0m"

# Print a highly clean, well-formatted help menu
help:
	@echo "\033[35m==============================================================================\033[0m"
	@echo "\033[1;36m                     SAUDI GAZETTE SYSTEM BUILD UTILITY\033[0m"
	@echo "\033[35m==============================================================================\033[0m"
	@echo "Available Commands:"
	@echo "  \033[1;32mmake install\033[0m       Installs all packages and TypeScript modules cleanly"
	@echo "  \033[1;32mmake lint\033[0m          Checks the entire project for TypeScript syntax/type errors"
	@echo "  \033[1;32mmake prune\033[0m         Scans and deletes unused images/assets, copying used ones"
	@echo "  \033[1;32mmake build\033[0m         Purges unused assets and bundles the app cleanly in 'dist/'"
	@echo "  \033[1;32mmake run\033[0m           Serves compiled 'dist/' folder and launches browser instantly"
	@echo "  \033[1;32mmake clean\033[0m         Wipes built assets ('dist/', 'public/assets')"
	@echo "  \033[1;32mmake all\033[0m           Full sequence: install -> lint -> prune -> build"
	@echo "\033[35m==============================================================================\033[0m"
