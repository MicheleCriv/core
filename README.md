# 🔒 Cyber Vibecoding Standards — Core Layer

The **Core Layer** defines the universal baseline of rules that every 
AI-driven project should inherit, regardless of domain or technology stack.

These YAML specifications are **machine-readable** and can be used by AI agents, 
CI/CD pipelines, or compliance tools to automatically verify project conformity.

---

## 📦 Included Standards
| File | Purpose |
|------|----------|
| `security.yaml` | Secure authentication, encryption, dependency scanning |
| `privacy.yaml` | Data protection, user consent, storage minimization |
| `ai-ethics.yaml` | Transparency, accountability, bias mitigation |
| `observability.yaml` | Logging, traceability, anomaly detection |

---

## 🧩 Schema Validation
All YAML files comply with the JSON Schema defined in `/schema/requirement.schema.json`.

Run validation:
```bash
npm install -g ajv-cli
ajv validate -s schema/requirement.schema.json -d "*.yaml"
