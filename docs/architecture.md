# AI Content Generator Platform Architecture

This diagram illustrates the user flow and system architecture of our AI-powered content generation platform.

```mermaid
graph TD
    classDef primary fill:#0ea5e9,stroke:#0284c7,color:white,stroke-width:2px
    classDef secondary fill:#d946ef,stroke:#c026d3,color:white,stroke-width:2px
    classDef success fill:#22c55e,stroke:#16a34a,color:white,stroke-width:2px
    classDef warning fill:#f59e0b,stroke:#d97706,color:white,stroke-width:2px
    classDef info fill:#3b82f6,stroke:#2563eb,color:white,stroke-width:2px
    
    A[🏠 User Visits Website] --> B{🔐 Authenticated?}
    B -->|No| C[✨ View Landing Page]
    B -->|Yes| D[📊 Access Dashboard]
    
    C --> C1[📱 View Product Features]
    C --> C2[💰 View Pricing Plans]
    C --> C3[👤 Sign Up / Log In]
    
    C3 --> C3A[📧 Email/Password]
    C3 --> C3B[🔑 OAuth Options]
    C3A & C3B --> D
    
    D --> E[📚 Template Library]
    D --> F[💳 Subscription Management]
    D --> G[👤 User Profile]
    
    E --> E1[🔍 Browse Templates]
    E1 --> E2[🏷️ Filter by Category]
    E2 --> E3[✅ Select Template]
    
    E3 --> H[✏️ Content Generation]
    
    H --> H1[🎨 Customize Content]
    H1 --> H1A[🎭 Adjust Tone]
    H1 --> H1B[📏 Set Length]
    H1 --> H1C[🎯 Choose Style]
    
    H1A & H1B & H1C --> H2[👁️ Real-time Preview]
    
    H2 --> H3{✓ Satisfied?}
    H3 -->|No| H1
    H3 -->|Yes| I[📤 Export Options]
    
    I --> I1[📋 Copy to Clipboard]
    I --> I2[📝 Export as Markdown]
    I --> I3[📄 Export as Plain Text]
    
    F --> F1[📊 View Current Plan]
    F --> F2[⚖️ Compare Plans]
    F --> F3[⬆️ Upgrade Subscription]
    F3 --> F3A[💳 Stripe Payment]
    F3A --> F4[✅ Confirmation]
    
    G --> G1[✏️ Edit Profile]
    G --> G2[📊 Usage Statistics]
    G --> G3[💰 Manage Billing]
    G --> G4[🚪 Log Out]
    G4 --> A
    
    class A,D primary
    class B,H3 info
    class C,C1,C2,C3 secondary
    class E,E1,E2,E3,H,H1,H2 warning
    class F,F1,F2,F3,F4,G,G1,G2,G3,G4 success
    class I,I1,I2,I3 primary
```

## Technical Architecture

```mermaid
flowchart TD
    classDef frontend fill:#3b82f6,stroke:#2563eb,color:white,stroke-width:2px
    classDef backend fill:#22c55e,stroke:#16a34a,color:white,stroke-width:2px
    classDef database fill:#d946ef,stroke:#c026d3,color:white,stroke-width:2px
    classDef external fill:#f59e0b,stroke:#d97706,color:white,stroke-width:2px

    Client[Client Browser] --> NextJS[Next.js Frontend]
    
    subgraph Frontend
        NextJS --> Auth[Authentication]
        NextJS --> Dashboard[Dashboard UI]
        NextJS --> Templates[Template Library]
        NextJS --> Editor[Content Editor]
        NextJS --> Preview[Real-time Preview]
        NextJS --> Export[Export Options]
    end
    
    subgraph Backend
        NextJS --> API[Next.js API Routes]
        API --> SupabaseAuth[Supabase Auth]
        API --> StripeAPI[Stripe Integration]
        API --> AIService[AI Content Generation]
    end
    
    subgraph Database
        SupabaseAuth --> SupabaseDB[(Supabase Database)]
        AIService --> SupabaseDB
    end
    
    subgraph External
        StripeAPI --> StripeService[Stripe Services]
    end
    
    class Client frontend
    class NextJS,Auth,Dashboard,Templates,Editor,Preview,Export frontend
    class API,SupabaseAuth,StripeAPI,AIService backend
    class SupabaseDB database
    class StripeService external
```

## Subscription Flow

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant UI as Frontend UI
    participant API as API Routes
    participant Stripe as Stripe API
    participant DB as Supabase DB

    User->>UI: Select pricing plan
    UI->>API: Request checkout session
    API->>Stripe: Create checkout session
    Stripe-->>API: Return session ID & URL
    API-->>UI: Return checkout URL
    UI->>User: Redirect to Stripe checkout
    User->>Stripe: Complete payment
    Stripe->>API: Webhook: payment successful
    API->>DB: Update subscription status
    API->>User: Redirect to success page
    User->>UI: Access premium features
    UI->>API: Verify subscription status
    API->>DB: Query subscription
    DB-->>API: Return subscription details
    API-->>UI: Confirm premium access
    UI->>User: Display premium content
```
