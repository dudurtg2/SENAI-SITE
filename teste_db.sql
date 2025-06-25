-- Script rápido de teste
SELECT 
    column_name, 
    data_type, 
    is_nullable, 
    column_default 
FROM information_schema.columns 
WHERE table_name = 'usuarios' 
AND table_schema = CURRENT_SCHEMA()
ORDER BY ordinal_position;

-- Verificar registros com problemas
SELECT 
    COUNT(*) as total_usuarios,
    COUNT(CASE WHEN status IS NULL THEN 1 END) as status_null,
    COUNT(CASE WHEN aceite_termos IS NULL THEN 1 END) as aceite_null
FROM usuarios;
