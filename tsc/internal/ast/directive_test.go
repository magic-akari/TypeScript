package ast_test

import (
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"gotest.tools/v3/assert"
)

func TestDirectiveStatementValue(t *testing.T) {
	t.Parallel()

	var factory ast.NodeFactory
	assert.Equal(t, factory.NewDirectiveStatement(`"use\x20strict"`).AsDirectiveStatement().Value(), `use\x20strict`)
	assert.Equal(t, factory.NewDirectiveStatement(`'use strict'`).AsDirectiveStatement().Value(), "use strict")
	assert.Equal(t, factory.NewDirectiveStatement("").AsDirectiveStatement().Value(), "")
	assert.Equal(t, factory.NewDirectiveStatement("\"").AsDirectiveStatement().Value(), "")
}
