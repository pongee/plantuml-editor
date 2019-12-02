export default {
    sequence: "@startuml\n" +
        "\n" +
        "Actor Foo1\n" +
        "Boundary Foo2\n" +
        "Control Foo3 #0000FF\n" +
        "Entity Foo4\n" +
        "Database Foo5\n" +
        "Collections Foo6\n" +
        "Participant Foo7\n" +
        "\n" +
        "== Message ==\n" +
        "Foo1 -> Foo2 : To boundary\n" +
        "Foo1 <- Foo2\n" +
        "note right: this is a first note\n" +
        "\n" +
        "== Save ==\n" +
        "activate Foo2\n" +
        "  Foo2 ->> Foo3 : To control\n" +
        "  note left #ffaaaa: this is another note\n" +
        "  \n" +
        "  ...5 minutes later...\n" +
        "  \n" +
        "  alt successful case\n" +
        "  Foo3 -\\ Foo4 : To entity\n" +
        "  Foo4 ->x Foo5 : To database\n" +
        "  Foo5 -\\\\ Foo6 : To collections\n" +
        "  Foo6 --// Foo7 : To participant\n" +
        "  else Another type of failure\n" +
        "  Foo2 <[#0000FF]- Foo3\n" +
        "  end\n" +
        "deactivate Foo2\n\n" +
        "@enduml",
    activity: "@startuml\n" +
        "\n" +
        "start\n" +
        "\n" +
        ":step 1;\n" +
        "\n" +
        "if (isUser?) then (true)\n" +
        "  :step 2;\n" +
        "  :step 3;\n" +
        "else (false)\n" +
        "  :error;\n" +
        "  end\n" +
        "endif\n" +
        "\n" +
        "stop\n" +
        "\n" +
        "@enduml",
    useCase: "@startuml\n" +
        "\n" +
        "actor Alice \n" +
        "actor Bob #red\n" +
        "\n" +
        "Alice -up-> (up)\n" +
        "Alice -right-> (center)\n" +
        "Alice -down-> (down)\n" +
        "Alice -left-> (left)\n" +
        "\n" +
        "Bob -up--> (up)\n" +
        "Bob -left.> (center)\n" +
        "Bob -[#0000FF]right-> (right)\n" +
        "Bob -down-> (down)\n" +
        "\n" +
        "@enduml",
};