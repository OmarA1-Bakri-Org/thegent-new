#!/bin/bash

# Phase 4: Testing & Validation Script
# Run this script after merging phase-0-syntax-fixes into feature/website-improvements

echo "=========================================="
echo "Phase 4: Testing & Validation"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track results
PASSED=0
FAILED=0

# Function to check command success
check_result() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ PASSED${NC}"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAILED${NC}"
        ((FAILED++))
    fi
    echo ""
}

echo "1. Installing dependencies..."
npm install
check_result

echo "2. Running TypeScript type check..."
npm run type-check
check_result

echo "3. Running ESLint..."
npm run lint
check_result

echo "4. Building production bundle..."
npm run build
check_result

echo "5. Checking build output size..."
if [ -d ".next" ]; then
    echo "Build directory exists"
    du -sh .next
    check_result
else
    echo -e "${RED}Build directory not found${NC}"
    ((FAILED++))
fi

echo ""
echo "=========================================="
echo "Validation Summary"
echo "=========================================="
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ All validations passed!${NC}"
    echo "Ready to merge into main branch."
    exit 0
else
    echo -e "${RED}✗ Some validations failed.${NC}"
    echo "Please fix the issues before merging."
    exit 1
fi
