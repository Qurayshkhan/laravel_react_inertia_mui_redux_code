<?php

namespace App\Interfaces;
use App\Models\User;

interface UserInterface
{
    public function getUserById(int $id): ?User;
    public function findByEmail(string $email): ?User;
    public function createUser(array $data): User;
}
