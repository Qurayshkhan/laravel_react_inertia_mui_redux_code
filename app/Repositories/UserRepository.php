<?php

namespace App\Repositories;
use App\Interfaces\UserInterface;
use App\Models\User;
use Hash;

class UserRepository implements UserInterface
{
    public $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * @param int $id
     * @return User|null
     */
    public function getUserById(int $id): ?User
    {
        return $this->user->find($id);
    }
    /**
     * @param string $email
     * @return User|null
     */
    public function getUserByEmail(string $email): ?User
    {
        return $this->user->where("email", $email)->first();
    }
    /**
     * @param array $data
     * @return User|null
     */

    public function createUser(array $data): User
    {
        $data['password'] = Hash::make($data['password']);
        $user = $this->user->create($data);
        return $user;
    }
}
